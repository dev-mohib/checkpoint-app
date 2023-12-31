<?php

namespace App\Http\Controllers\Organization;

use App\Http\Controllers\Controller;
use App\Http\Utils\DBUtils;
use App\Http\Utils\UserRole;
use App\Models\Checkpoint;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Organization;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rules;
use Inertia\Inertia;

class OrganizationController extends Controller
{

    public function index(Request $request)
    {
        $name = $request->query('name')??'';
        $email = $request->query('email')??'';
        $id = $request->query('id')??'';
        $address = $request->query('address')??'';
        $username = $request->query('username')??'';
        $paginate = $request->query('paginate')??5;
        if(!UserRole::is_admin($request)){
            return redirect('/not-allowed');
        }
        $organizations = Organization::with(['users'])
        ->where('organizations.name', 'like', '%' . $name . '%')
        ->whereHas('users', function ($query) use ($username) {
            $query->where('username', 'like', '%'.$username.'%');
        })
        ->whereHas('users', function ($query) use ($email) {
            $query->where('email', 'like', '%'.$email.'%');
        })
        ->whereHas('users', function ($query) use ($address) {
            $query->where('address', 'like', '%'.$address.'%');
        })
        ->where('id', 'like', '%' . $id . '%')
        ->paginate($paginate);
        return Inertia::render('Organization/index', [
            'title' => 'Organizations', 
            'activeMenu'=> 'organization', 
            'organizations'=>$organizations,
            'canAccess'=> true
        ]);
    }
    public function create(Request $request)
    {
        if(!UserRole::is_admin($request)){
            return redirect('/dashboard');
        }
        return Inertia::render('Organization/create/index', ['title' => 'Create organization', 'activeMenu'=> 'organization', 'canAccess'=>true]);
    }
    public function store(Request $request)
    {
        if(!UserRole::is_admin($request)){
            return redirect('/dashboard');
        }
        $request->validate([
            'name' => 'required|string|max:255|min:5',
            'email' => 'required|string|email|max:255|unique:'.User::class,
            'password' => ['required', Rules\Password::defaults()],// 'confirmed'
            'contact'=> 'required',
            'username'=> 'required|string|max:30|unique:'.User::class,
            'address' => 'required|string|min:10',
            'regDocRef' => 'required',
            'logoRef' => 'required'
        ]);
        
       
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'address'=> $request->address,
            'contact'=> $request->contact,
            'username'=> $request->username,
            'role'=> 'organization',
        ]);
        event(new Registered($user));
        $regDocRef = $request->regDocRef;
        $logoRef = $request->logoRef;
        if($regDocRef){
            Storage::move('temp/organization-document/'.$regDocRef, 'public/organization-document/'.$regDocRef);
        }
        if($logoRef){
            Storage::move('temp/organization-logo/'.$logoRef, 'public/organization-logo/'.$logoRef);
        }
        $organization = Organization::create([
            'name'=> $request->name,
            'registration_doc' => $regDocRef,
            'logo' => $logoRef
        ]);

        $organization->users()->associate($user);
        $organization->save();

        return redirect('/organization/view/'.$organization->id);
        // return redirect('/organization/view/1');
    }
    public function show(Request $request, string $id)
    {
        if(!UserRole::is_admin($request)){
            return redirect('/dashboard');
        }
        $organization = Organization::with([
            'students','instructors', 'checkpoints','users', 'instructors.users', 'students.users'
            ])
        ->find($id);
        
        $collection = $request->query('collection')??'';
        $searchBy = $request->query('searchBy')??'';
        $q = $request->query('q')??'';
        $searchData = ($collection && $searchBy) ? DBUtils::get_admin_search_data($collection, $searchBy, $q)??array() : array();
        if(!$organization){
            return Inertia::render('Organization/show/index',['isFound'=> false, 'title'=> 'Organizatiom', 'activeMenu'=>'organization', 'canAccess'=>true]);
        }else {
            return Inertia::render('Organization/show/index',['organization' => $organization, 'isFound'=> true, 'title'=>$organization['name'],'activeMenu'=>'organization', 'canAccess'=>true, 'logoUrl'=>null, 'searchData'=>$searchData]);
        }
    }
    public function showEdit(Request $request, string $id)
    {   
        // $id = $request->query('id');
        if(!UserRole::is_admin($request)){
            return redirect('/dashboard');
        }
        $organization = Organization::with(['users'])
        ->find($id);
        if(!$organization){
            return Inertia::render('Organization/edit/index',['isFound'=> false, 'title'=> 'Edit Organization', 'activeMenu'=>'organization', 'isFound'=>false, 'canAccess'=>true]);
        }else {
            return Inertia::render('Organization/edit/index',['organization' => $organization, 'isFound'=> true, 'title'=>$organization['name'],'activeMenu'=>'organization', 'isFound'=>true, 'canAccess' => true]);
        }
    }
    public function attachEntity(Request $request){
        if(!UserRole::is_admin($request)){
            return redirect('/dashboard');
        }
        $form = $request->all();
        $organization_id = $form['id']??'1';
        $entity_type = $form['entityType'];
        $entity_id = $form['entityId'];
        if($organization_id && $entity_type && $entity_id){
            $organization = Organization::with(['students', 'instructors', 'checkpoints'])
            ->find($organization_id);
            if($organization){
                if($entity_type == 'instructor'){
                    $instructor = $organization->instructors()->find($entity_id);
                    if(!$instructor){
                        $organization->instructors()->attach($entity_id);
                    }else{
                        Log::info('Instructor is already attached');
                    }
                }else if($entity_type == 'student'){
                    $student = $organization->students()->find($entity_id);
                    if(!$student){
                        $organization->students()->attach($entity_id);
                    }else {
                        Log::info('Student is already attached');
                    }
                }
                else {
                   $checkpoint = Checkpoint::find($entity_id);//$organization->checkpoints()->find($entity_id);
                   $checkpoint->organization_id = $organization_id;
                   $checkpoint->save();
                    // if(!$checkpoint){
                    //     // ->detach($entity_id) to remove
                    //     $organization->checkpoints()->associate($entity_id);
                    //     $organization->save();

                    // }else {
                    //         Log::info('Checkpoint is already attached');
                    // }
                }
            }
        }
        return redirect('/organization/view/'.$organization_id);
    }
    public function detachEntity(Request $request){
        if(!UserRole::is_admin($request)){
            return redirect('/dashboard');
        }
        $form = $request->all();
        $organization_id = $form['id'];
        $entity_type = $form['entityType'];
        $entity_id = $form['entityId'];
        if($organization_id && $entity_type && $entity_id){
            $organization = Organization::with(['students', 'instructors', 'checkpoints'])
            ->find($organization_id);
            if($organization){
                if($entity_type == 'instructor'){
                    $instructor = $organization->instructors()->find($entity_id);
                    if($instructor){
                        $organization->instructors()->detach($entity_id);
                    }
                }else if($entity_type == 'student'){
                    $student = $organization->students()->find($entity_id);
                    if($student){
                        $organization->students()->detach($entity_id);
                    }
                }
                else {
                   $checkpoint = Checkpoint::find($entity_id);
                   $checkpoint->organization_id = null;
                   $checkpoint->save();
                }
            }
        }
        return redirect('/organization/view/'.$organization_id);
    }
    public function update(Request $request)
    {
        if(!UserRole::is_admin($request)){
            return redirect('/dashboard');
        }
        $request->validate([
            'name' => 'required|string|max:255',
            'address' => 'required|string|max:255|min:10',
            'contact_number'=> 'required',
            'email' => 'required|string|email|max:255',
            'username'=> 'required|string|max:30',
        ]);
        $form = $request->all();

       
        $org = Organization::with('users')
        ->find($form['id']);

        if($form['email'] != $org->users->email){
            $request->validate([
                'email' => 'unique:'.User::class
            ]);
        }
        if($form['username'] != $org->users->username){
            $request->validate([
                'username' => 'unique:'.User::class
            ]);
        }
        if($form['password']){
            $request->validate([
                'password' => ['required', Rules\Password::defaults()]
            ]);
        }
        $org->name = $form['name'];
        if($form['logoRef']){
            $org->logo=$form['logoRef'];
            Storage::move('temp/organization-logo/'.$form['logoRef'], 'public/organization-logo/'.$form['logoRef']);
        }
        $user = $org->users;
        $user->contact_number = $form['contact_number'];
        if($form['password'])
            $user->password = $form['password'];
        $user->email = $form['email'];
        $user->address = $form['address'];
        $user->username = $form['username'];

        $user->save();
        $org->save();

        return Redirect::route('organization.show',['id'=>$form['id']]);
       
    }
    public function destroy(Request $request, string $id)
    {
        if(!UserRole::is_admin($request)){
            return redirect('/dashboard');
        }
        $organization = Organization::find($id);
        if($organization){
            $instructors = $organization->instructors;
            $checkpoints = $organization->checkpoints;
            $students = $organization->students;

            foreach($checkpoints as $checkpoint){
                $checkpoint->delete();
            }

            foreach($instructors as $instructor){
                $organization->instructors()->detach($instructor);
                $alreadyAttached = Organization::whereHas('instructors', function ($query) use ($instructor) {
                    $query->where('instructors.id', $instructor->id);
                })->exists();

                if(!$alreadyAttached){
                    Storage::delete('public/instructor-photo-back/'.$instructor->photo_id_back);
                    Storage::delete('public/instructor-photo-front/'.$instructor->photo_id_front);
                    $instructor->users()->delete();
                    $instructor->delete();
                }
            }

            foreach($students as $student){
                $organization->students()->detach($student);
                $alreadyAttached = Organization::whereHas('students', function ($query) use ($student) {
                    $query->where('students.id', $student->id);
                })->exists();

                if(!$alreadyAttached){
                    $student->users()->delete();
                    $student->delete();
                }
            }
            Storage::delete('public/organization-logo/'.$organization->logo);
            Storage::delete('public/organization-document/'.$organization->registration_doc);
            $organization->users->delete();
            $organization->delete();
        }
        return Redirect::route('organization.index');
    }
}

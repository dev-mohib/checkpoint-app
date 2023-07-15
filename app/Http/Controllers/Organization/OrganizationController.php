<?php

namespace App\Http\Controllers\Organization;

use App\Http\Controllers\Controller;
use App\Http\Utils\UserRole;
use App\Models\Instructor;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Organization;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Ramsey\Uuid\Uuid; 

class OrganizationController extends Controller
{

    public function index(Request $request)
    {
        $name = $request->query('name')??'';
        $email = $request->query('email')??'';
        $id = $request->query('id')??'';
        $address = $request->query('address')??'';
        $username = $request->query('username')??'';

        // if(UserType::is_instructor($request) || UserType::is_student($request)){
        //     return UserType::notAllowed();
        // }
        
        if(UserRole::is_instructor($request) || UserRole::is_student($request) || UserRole::is_organization($request)){
            return Inertia::render('Organization/index', ['title' => 'Organizations', 'activeMenu'=> 'organization']);
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
            ->paginate(5);
            return Inertia::render('Organization/index', [
                'title' => 'Organizations', 
                'activeMenu'=> 'organization', 
                'organizations'=>$organizations,
                'canAccess'=> true
            ]);
    }
    public function create(Request $request)
    {
        return Inertia::render('Organization/create/index', ['title' => 'Create organization', 'activeMenu'=> 'organization', 'canAccess'=>UserRole::is_admin($request)?true:false]);
    }

    public function store(Request $request)
    {
        // $request->validate([
        //     'name' => 'required|string|max:255',
        //     'email' => 'required|string|email|max:255|unique:'.User::class,
        //     'password' => ['required', 'confirmed', Rules\Password::defaults()],
        //     'contact'=> 'requitrd',
        //     'username'=> 'required|string|max:30|unique:'.User::class,
        //     'address' => 'required|string|min:20'
        // ]);
        
        $userUid = Uuid::uuid4()->toString();
        $orgUid = Uuid::uuid4()->toString();

        Log::info(['user'=>$request->username, 'message'=>'This is create organization message']);
        $user = User::create([
            'id'=> $userUid,
            'name' => $request->name.' - Admin',
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'address'=> $request->address,
            'contact'=> $request->contact,
            'username'=> $request->username,
            'role'=> 'organization',
        ]);

        event(new Registered($user));
        $organization = Organization::create([
            'id'=> $orgUid,
            'created_by'=> $request->user()->id,
            'user_id'=> $userUid,
            'name'=> $request->name,  
            'logo'=>'/laptop.jpg'
        ]);


        try {
            Storage::copy('temp/64a6a0829d03a-1688641666.png', 'app/organizations/file.png');
        } catch (\Throwable $th) {
            //throw $th;
        }
        return redirect('/organization/view/'.$orgUid);
    }

    public function show(Request $request, string $id)
    {
        if(!UserRole::is_admin($request)){
            return Inertia::render('Organization/show/index',['isFound'=> false, 'title'=> 'Organization', 'activeMenu'=>'organization', 'canAccess'=>false]);
        }
        $organization = Organization::with([
            'students','instructors', 'checkpoints','users', 'instructors.users', 'students.users'
            ])
        ->find($id);
        if(!$organization){
            return Inertia::render('Organization/show/index',['isFound'=> false, 'title'=> 'Organizatiom', 'activeMenu'=>'organization', 'canAccess'=>true]);
        }else {
            return Inertia::render('Organization/show/index',['organization' => $organization, 'isFound'=> true, 'title'=>$organization['name'],'activeMenu'=>'organization', 'canAccess'=>true]);
        }
    }
    public function showEdit(Request $request, string $id)
    {   
        // $id = $request->query('id');
        if(!UserRole::is_admin($request)){
            return Inertia::render('Organization/edit/index',['isFound'=> false, 'title'=> 'Edit Organization', 'activeMenu'=>'organization', 'isFound'=>false]);
        }
        $organization = Organization::with(['users'])
        ->find($id);
        if(!$organization){
            return Inertia::render('Organization/edit/index',['isFound'=> false, 'title'=> 'Edit Organization', 'activeMenu'=>'organization', 'isFound'=>false, 'canAccess'=>true]);
        }else {
            return Inertia::render('Organization/edit/index',['organization' => $organization, 'isFound'=> true, 'title'=>$organization['name'],'activeMenu'=>'organization', 'isFound'=>true, 'canAccess' => true]);
        }
    }

    public function update(Request $request)
    {
        $form = $request->all();
        $org = Organization::with('users')
        ->find($form['id']);

        $org->name = $form['name'];
        $org->save();

        $user = $org->users;
        $user->contact_number = $form['contact_number'];
        if($form['password'])
            $user->password = $form['password'];
        $user->email = $form['email'];
        $user->address = $form['address'];
        $user->username = $form['username'];

        $user->save();

        
        // $email = $request->form
        if(true){
            return Redirect::route('organization.show',['id'=>$form['id']]);
        }else {
            // return Inertia::render('Organization/edit/index',['organization' => $update, 'isSuccess'=> true, 'title'=>'Organization','activeMenu'=>'organization']);
            return Redirect::route('organization.show',['id'=>$form['id']]);
        }
    }

    public function destroy(string $id)
    {
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
                    $instructor->users->delete();
                    $instructor->delete();
                }
            }

            foreach($students as $student){
                $organization->students()->detach($student);
                $alreadyAttached = Organization::whereHas('students', function ($query) use ($student) {
                    $query->where('students.id', $student->id);
                })->exists();

                if(!$alreadyAttached){
                    $student->users->delete();
                    $student->delete();
                }
            }
           
            $organization->users->delete();
            $organization->delete();
        }
        return Redirect::route('organization.index');
    }

    public function search(Request $request){
        $res = ['name'=>'Some Name', 'age'=> 20];
        return Inertia::render('Organization/create/index', ['title' => 'Create organization', 'activeMenu'=> 'organization', 'showSearch'=>true, 'searchData'=>'some searchData']);
    }
}

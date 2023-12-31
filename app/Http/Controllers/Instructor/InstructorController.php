<?php

namespace App\Http\Controllers\Instructor;

use App\Http\Controllers\Controller;
use App\Http\Utils\DBUtils;
use App\Http\Utils\UserRole;
use App\Models\Checkpoint;
use App\Models\Instructor;
use App\Models\Organization;
use App\Models\User;
use Illuminate\Validation\Rules;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class InstructorController extends Controller
{
    public function index(Request $request)
    {
        $name = $request->query('name')??'';
        $email = $request->query('email')??'';
        $id = $request->query('id')??'';
        $username = $request->query('username')??'';
        $orgName = $request->query('orgName')??'';
        $orgId = $request->query('orgId');
        $paginate = $request->query('paginate')??5;

        if(UserRole::is_student($request) || UserRole::is_instructor($request)){
            return redirect('/not-allowed');
        }

        $instructors = Instructor::with(['organizations', 'users'])
            ->whereHas('users', function ($query) use ($name) {
                $query->where('name', 'like', '%'.$name.'%');
            })
            ->whereHas('users', function ($query) use ($username) {
                $query->where('username', 'like', '%'.$username.'%');
            })
            ->whereHas('users', function ($query) use ($email) {
                $query->where('email', 'like', '%'.$email.'%');
            })
            ->whereHas('users', function ($query) use ($orgId) {
                $query->where('id', 'like', '%'.$orgId.'%');
            })
            ->where('id', 'like', '%' . $id . '%');
            if($orgName){
                $instructors = $instructors->whereHas('organizations', function ($query) use ($orgName) {
                    $query->where('name', 'like', '%'.$orgName.'%');
                });
            }
        if(UserRole::is_admin($request)){
            $instructors = $instructors->paginate($paginate);
        } else {
            $id = DBUtils::getOrganizationId($request);
            $instructors = $instructors
            ->whereHas('organizations', function ($query) use ($id) {
                $query->where('organizations.id', $id);
            })
            ->paginate($paginate);
        }
        return Inertia::render('Instructor/index', ['title' => 'Instructors', 'activeMenu'=> 'instructor', 'instructors'=>$instructors, 'canAccess'=>true]);
    }
    public function create(Request $request)
    {
        if(UserRole::is_student($request) || UserRole::is_instructor($request)){
            return redirect('/not-allowed');
        }
        return Inertia::render('Instructor/create/index', ['title' => 'Create instructor', 'activeMenu'=> 'instructor', 'showSearch'=>false, 'canAccess' => true]);
    }
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:'.User::class,
            'address' => 'required|string|min:10',
            'contact_number' => 'required|string',
            'username'=> 'required|string|max:30|min:7|unique:'.User::class,
            'password' => ['required', Rules\Password::defaults()],//'confirmed'
            'qualification'=> 'required',
            'photo_id_front' => 'required',
            'photo_id_back' => 'required',
        ]);

        if(UserRole::is_student($request) || UserRole::is_instructor($request)){
            return redirect('/not-allowed');
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'address'=> $request->address,
            'contact_number'=> $request->contact_number,
            'username'=> $request->username,
            'role'=> 'instructor',
        ]);
        $photo_id_front = $request->photo_id_front;
        $photo_id_back = $request->photo_id_back;

        $instructor = Instructor::create([
            'qualification'=> $request->qualification,
            'photo_id_front'=> $photo_id_front,
            'photo_id_back'=> $photo_id_back
        ]);
        $instructor->users()->associate($user);
        $instructor->save();
        if($photo_id_front){
            Storage::move('temp/instructor-photo-front/'.$photo_id_front, 'public/instructor-photo-front/'.$photo_id_front);
        }
        if($photo_id_back){
            Storage::move('temp/instructor-photo-back/'.$photo_id_back, 'public/instructor-photo-back/'.$photo_id_back);
        }
        return redirect('/instructor/view/'.$instructor->id);
    }
    public function show(Request $request, string $id)
    {
        if(UserRole::is_student($request) || UserRole::is_instructor($request)){
            return redirect('/not-allowed');
        }
        $instructor = Instructor::with([
            'students','organizations', 'checkpoints','users', 'organizations.users', 'students.users',
            'students.organizations'
        ])->find($id);
        
        if(!UserRole::is_admin($request)){
            $instructor->setRelation('organizations', Collection::make([]));
        }
        $collection = $request->query('collection')??'';
        $searchBy = $request->query('searchBy')??'';
        $q = $request->query('q')??'';
        $searchData = array();
        if($collection && $searchBy){
            $searchData = UserRole::is_admin($request) ? DBUtils::get_admin_search_data($collection, $searchBy, $q)??array() : DBUtils::get_organization_search_data($collection, $searchBy, $q, $request->user()->id);
        }
        if(!$instructor){
            return Inertia::render('Instructor/show/index',
                [
                    'isEmpty'=> true, 'title'=> 'Instructor', 
                    'activeMenu'=>'instructor',
                    'canAccess'=>true
            ]);
        } else {
            return Inertia::render('Instructor/show/index',
                [
                    'instructor' => $instructor, 'isEmpty'=> false, 
                    'title'=>'Instructor','activeMenu'=>'instructor',
                    'searchData'=>$searchData,
                    'canAccess'=>true
                ]);
        }
    }
    public function showEdit(Request $request, string $id)
    {   
        if(UserRole::is_student($request) || UserRole::is_instructor($request)){
            return redirect('/not-allowed');
        }
        $instructor = Instructor::with(['users'])
        ->find($id);
        if(!$instructor){
            return Inertia::render('Instructor/edit/index',['isEmpty'=> true, 'title'=> 'Edit', 'activeMenu'=>'instructor', 'isFound'=>false, 'canAccess'=>true]);
        }else {
            return Inertia::render('Instructor/edit/index',['instructor' => $instructor, 'isEmpty'=> false, 'title'=>'Edit','activeMenu'=>'instructor', 'isFound'=>true, 'canAccess'=>true]);
        }
    }
    public function update(Request $request)
    {
        if(UserRole::is_student($request) || UserRole::is_instructor($request)){
            return redirect('/not-allowed');
        }

        $request->validate([
            'name' => 'required|string|max:255',
            // 'gender' => 'required|string|max:255',
            'address' => 'required|string|max:255|min:10',
            'contact_number'=> 'required',
            'email' => 'required|string|email|max:255',
            'username'=> 'required|string|max:30',
        ]);
        $form = $request->all();
        $instructor = Instructor::with(['users'])
        ->find($form['id']);

        if($form['email'] != $instructor->users->email){
            $request->validate([
                'email' => 'unique:'.User::class
            ]);
        }
        if($form['username'] != $instructor->users->username){
            $request->validate([
                'username' => 'unique:'.User::class
            ]);
        }
        if($form['password']){
            $request->validate([
                'password' => ['required', Rules\Password::defaults()]
            ]);
        }
        $user = $instructor->users;
        $user->contact_number = $form['contact_number'];
        $user->name = $form['name'];
        if($form['password'])
            $user->password = $form['password'];
        $user->email = $form['email'];
        $user->address = $form['address'];
        $user->username = $form['username'];

        if($form['photo_id_front']){
            $instructor->photo_id_front=$form['photo_id_front'];
            Storage::move('temp/instructor-photo-front/'.$form['photo_id_front'], 'public/instructor-photo-front/'.$form['photo_id_front']);
        }
        if($form['photo_id_back']){
            $instructor->photo_id_back=$form['photo_id_back'];
            Storage::move('temp/instructor-photo-back/'.$form['photo_id_back'], 'public/instructor-photo-back/'.$form['photo_id_back']);
        }
        $instructor->save();
        $user->save();

        return Redirect::route('instructor.show',['id'=>$form['id']]);
    }
    public function attachEntity(Request $request){
        if(UserRole::is_admin($request) || UserRole::is_organization($request)){
        $form = $request->all();
        $instructor_id = $form['id']??'1';
        $entity_type = $form['entityType'];
        $entity_id = $form['entityId'];
        if($instructor_id && $entity_type && $entity_id){
            $instructor = Instructor::with(['students', 'organizations', 'checkpoints'])
            ->find($instructor_id);
            if($instructor){
                if($entity_type == 'organization'){
                    $organizations = $instructor->organizations()->find($entity_id);
                    if(!$organizations){
                        $instructor->organizations()->attach($entity_id);
                    }
                }else if($entity_type == 'student'){
                    $student = $instructor->students()->find($entity_id);
                    if(!$student){
                        $instructor->students()->attach($entity_id);
                    }
                }
                else {
                    $checkpoint = Checkpoint::find($entity_id);
                    $checkpoint->instructor_id = $instructor_id;
                    $checkpoint->save();
                }
            }
        }
            return redirect('/instructor/view/'.$instructor_id);
         }else {
        return redirect('/dashboard');
     }
    }
    public function detachEntity(Request $request){
        if(UserRole::is_admin($request) || UserRole::is_organization($request)){
        $form = $request->all();
        $instructor_id = $form['id'];
        $entity_type = $form['entityType'];
        $entity_id = $form['entityId'];
        if($instructor_id && $entity_type && $entity_id){
            $instructor = Instructor::with(['students', 'organizations', 'checkpoints'])
            ->find($instructor_id);
            if($instructor){
                if($entity_type == 'organization'){
                    $organizations = $instructor->organizations()->find($entity_id);
                    if($organizations){
                        $instructor->organizations()->detach($entity_id);
                    }
                }else if($entity_type == 'student'){
                    $student = $instructor->students()->find($entity_id);
                    if($student){
                        $instructor->students()->detach($entity_id);
                    }
                }
                else {
                   $checkpoint = $instructor->checkpoints()->find($entity_id);
                   if($checkpoint){  
                    $checkpoint = Checkpoint::find($entity_id);
                    $checkpoint->instructor_id = null;
                    $checkpoint->save();
                }
                }
            }
        }
            return Redirect::to('/instructor/view/'.$instructor_id);
         }else {
        return Redirect::to('/dashboard');
     }
    }
    public function search(Request $request){

        if(UserRole::is_student($request) || UserRole::is_instructor($request)){
            return redirect('/not-allowed');
        }
        $type = $request->query('type');
        $searchBy = $request->query('searchBy');
        $input = $request->query('query');
        $instructorId = $request->query('instructorId');
        // Log::info(['type'=>$type, 'searchBy'=>$searchBy]);
        
        $instructor = DB::table('instructors')
        ->where('id', $instructorId)
        ->first();
        if($type == 'organization'){
            $searchOrganizations = $searchBy == 'name'?  DB::table('organizations')
            ->where('name', 'like', '%'.$input.'%')
            ->get()->toArray() : DB::table('organizations')
            ->where('id',$input)
            ->get()->toArray();

            $filteredOrgs = array_map(function($item) {
                return ['name'=>$item['name'], 'id'=>$item['id'],'role'=>'organization'];//$item['id'];
            }, $searchOrganizations);
            return Inertia::render('Instructor/show/index',['instructor' => $instructor, 'showOrgModal'=> true, 'title'=>'Instructor','activeMenu'=>'instructor', 'searchData'=>$filteredOrgs]);
        }else {
            $instructor = DB::table('instructors')
            ->join('organizations', 'organizations.name', 'like', '%'.$input.'%')
            ->select('organizations.* as organizations')
            ->get();
            return Inertia::render('Instructor/show/index',['instructor' => $instructor, 'showOrgModal'=> true, 'title'=>'Instructor','activeMenu'=>'instructor']);
        }
    }
    public function destroy(Request $request, string $id)
    {
        if(UserRole::is_student($request) || UserRole::is_instructor($request)){
            return redirect('/not-allowed');
        }
        $instructor = Instructor::find($id);

        if(!$instructor){
            return Redirect::route('instructor.index');
        }
        $students = $instructor->students;
        $checkpoints = $instructor->checkpoints;

        
        Storage::delete('public/instructor-photo-back/'.$instructor->photo_id_back);
        Storage::delete('public/instructor-photo-front/'.$instructor->photo_id_front);
        
        foreach($checkpoints as $checkpoint){
            $checkpoint->delete();
        }

        foreach($students as $student){
            $instructor->students()->detach($student);
            $alreadyAttached = Organization::whereHas('students', function ($query) use ($student) {
                $query->where('students.id', $student->id);
            })->exists();

            if(!$alreadyAttached){
                $student->users->delete();
                $student->delete();
            }
        }

        $instructor->organizations()->detach();
        $instructor->users->delete();
        $instructor->delete();
           
        return Redirect::route('instructor.index');
    }
}

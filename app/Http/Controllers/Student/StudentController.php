<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use App\Http\Utils\DBUtils;
use App\Http\Utils\UserRole;
use App\Models\Checkpoint;
use App\Models\Student;
use App\Models\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Validation\Rules;
use Inertia\Inertia;

class StudentController extends Controller
{
    public function index(Request $request)
    {
        $name = $request->query('name')??'';
        $paginate = $request->query('paginate')??5;
        $email = $request->query('email')??'';
        $id = $request->query('id')??'';
        $username = $request->query('username')??'';
        $orgName = $request->query('orgName')??'';
        $orgId = $request->query('orgId');

        if(UserRole::is_student($request)){
            return redirect('/not-allowed');
        }

        $students = Student::with(['organizations', 'users', 'instructors'])
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
        });
        
        if(UserRole::is_admin($request)){
            $uid = $request->user()->id;
            $students = $students
            ->where('id', 'like', '%' . $id . '%');
            if($orgName){
                $students = $students
                ->whereHas('organizations', function ($query) use ($orgName) {
                    $query->where('name', 'like', '%'.$orgName.'%');
                });
            }
            $students = $students->paginate($paginate);
        } else if(UserRole::is_organization($request)){
            $table = DB::table('organizations')
            ->where('user_id', '=',$request->user()->id)
            ->select(['id'])
            ->first();

            $uid = $table->id;
            $students = $students
            ->whereHas('organizations', function ($query) use ($uid){
                $query->where('organizations.id', $uid);
            })
            ->paginate($paginate);
        }
        else if(UserRole::is_instructor($request)){
            $table = DB::table('instructors')
            ->where('user_id', '=',$request->user()->id)
            ->select(['id'])
            ->first();
            $uid = $table->id;
            $students = $students
            ->whereHas('instructors', function ($query) use ($uid){
                $query->where('instructors.id', $uid);
            })
            ->paginate($paginate);
        }

        return Inertia::render('Student/index', ['title' => 'Students', 'activeMenu'=> 'student', 'students'=>$students, 'canAccess'=>true]);

    }

    public function create(Request $request)
    {
        if(UserRole::is_student($request) || UserRole::is_instructor($request)){
            return redirect('/not-allowed');
        }
        return Inertia::render('Student/create/index', ['title' => 'Create Student', 'activeMenu'=> 'student', 'canAccess' => true]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'gender' => 'required|string|max:255',
            'address' => 'required|string|max:255|min:10',
            'contact_number'=> 'required',
            'guardian_name' => 'required|string',
            'guardian_relationship' => 'required|string',
            'email' => 'required|string|email|max:255|unique:'.User::class,
            'username'=> 'required|string|max:30|unique:'.User::class,
            'password' => ['required', Rules\Password::defaults()],
        ]);

        if(UserRole::is_student($request)){
            return redirect('/not-allowed');
        }
        
        // return redirect('/student');

        $user = User::create([
            'name' => $request->name,
            'gender' => $request->gender,
            'address'=> $request->address,
            'contact_number'=> $request->contact_number,
            'guardian_name' => $request->guardian_name,
            'guardian_relationship' => $request->guardian_relationship,
            'email' => $request->email,
            'username'=> $request->username,
            'password' => Hash::make($request->password),
            'role'=> 'student',
        ]);

        $student = Student::create([
            'guardian_name'=> $request->guardian_name??'',
            'guardian_relationship' => $request->guardian_relationship
        ]);
        $student->users()->associate($user);
        $student->save();
        return redirect('/student/view/'.$student->id);
    }

    public function show(Request $request, string $id)
    {
        if(UserRole::is_student($request)){
            return redirect('/not-allowed');
        }
        $student = Student::with([
            'organizations', 'checkpoints','users', 'organizations.users', 'instructors', 'instructors.users'
        ])
        ->find($id);
        if(!UserRole::is_admin($request)){
            $student->setRelation('organizations', Collection::make([]));
        }
        $collection = $request->query('collection');
        $searchBy = $request->query('searchBy')??'name';
        $q = $request->query('q')??'';
        $searchData = array();
        if($collection && $searchBy){
            if(UserRole::is_admin($request)){
                $searchData = DBUtils::get_admin_search_data($collection, $searchBy, $q);
            }else if(UserRole::is_organization($request)){
                $searchData = DBUtils::get_organization_search_data($collection, $searchBy, $q, $request->user()->id);
            }else if(UserRole::is_instructor($request)){
                $searchData = DBUtils::get_instructor_search_data($collection, $searchBy, $q, $request->user()->id);
            }
        }
        if(!$student){
            return Inertia::render('Student/show/index',
                [
                    'isEmpty'=> true, 'title'=> 'Student', 
                    'activeMenu'=>'student',
                    'canAccess'=>true
                ]);
        } else {
            return Inertia::render('Student/show/index',
                [
                    'student' => $student, 'isEmpty'=> false, 
                    'title'=>'Student','activeMenu'=>'student',
                    'searchData'=>$searchData,
                    'canAccess'=>true
                ]);
        }
    }

    public function showEdit(Request $request, string $id)
    {   
        if(UserRole::is_student($request)){
            return redirect('/not-allowed');
        }
        $student = Student::with(['users'])
        ->find($id);
        if(!$student){
            return Inertia::render('Student/edit/index',['isEmpty'=> true, 'title'=> 'Edit', 'activeMenu'=>'student', 'isFound'=>false, 'canAccess'=>true]);
        }else {
            return Inertia::render('Student/edit/index',['student' => $student, 'isEmpty'=> false, 'title'=>'Edit','activeMenu'=>'student', 'isFound'=>true, 'canAccess'=>true]);
        }
    }

    public function update(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'gender' => 'required|string|max:255',
            'address' => 'required|string|max:255|min:10',
            'contact_number'=> 'required',
            'guardian_name' => 'required|string',
            'guardian_relationship' => 'required|string',
            'email' => 'required|string|email|max:255',
            'username'=> 'required|string|max:30',
        ]);
        if(UserRole::is_student($request)){
            return redirect('/not-allowed');
        }

        $form = $request->all();

        $student = Student::with('users')
        ->find($form['id']);
        
        if($form['email'] != $student->users->email){
            $request->validate([
                'email' => 'unique:'.User::class
            ]);
        }
        if($form['username'] != $student->users->username){
            $request->validate([
                'username' => 'unique:'.User::class
            ]);
        }
        if($form['password']){
            $request->validate([
                'password' => ['required', Rules\Password::defaults()]
            ]);
        }
        $student->guardian_name = $form['guardian_name'];
        $student->guardian_relationship = $form['guardian_relationship'];
        $student->save();

        $user = $student->users;
        $user->name = $form['name'];
        $user->email = $form['email'];
        $user->address = $form['address'];
        $user->contact_number = $form['contact_number'];
        $user->gender = $form['gender'];
        $user->username = $form['username'];
        if($form['password'] != 'Default123')
            $user->password = Hash::make($form['password']);

        $user->save();

        // if(true){
            return Redirect::route('student.show',['id'=>$form['id']]);
        // }else {
        //     // return Inertia::render('Organization/edit/index',['organization' => $update, 'isSuccess'=> true, 'title'=>'Organization','activeMenu'=>'organization']);
        //     return Redirect::route('student.show',['id'=>$form['id']]);
        // }
    }
    public function attachEntity(Request $request){
        $form = $request->all();
        $student_id = $form['id']??'1';
        $entity_type = $form['entityType'];
        $entity_id = $form['entityId'];
        if((UserRole::is_admin($request) || UserRole::is_organization($request)) && $student_id && $entity_type && $entity_id){
            $student = Student::with(['instructors', 'organizations', 'checkpoints'])
            ->find($student_id);
            Log::info($entity_type);
            if($student){
                if($entity_type == 'organization'){
                    $organizations = $student->organizations()->find($entity_id);
                    if(!$organizations){
                        $student->organizations()->attach($entity_id);
                    }
                }else if($entity_type == 'instructor'){
                    $instructor = $student->instructors()->find($entity_id);
                    if(!$instructor){
                        $student->instructors()->attach($entity_id);
                    }
                }
                else {
                   $checkpoint = $student->checkpoints()->find($entity_id);
                    if(!$checkpoint){
                        $student->checkpoints()->attach($entity_id);
                    }
                }
            }
            return redirect('/student/view/'.$student_id);
        }else {
            return redirect('/dashboard');
        }
    }
    public function detachEntity(Request $request){
        $form = $request->all();
        $student_id = $form['id'];
        $entity_type = $form['entityType'];
        $entity_id = $form['entityId'];

        if((UserRole::is_admin($request) || UserRole::is_organization($request)) && $student_id && $entity_type && $entity_id){
            $student = Student::with(['instructors', 'organizations', 'checkpoints'])
            ->find($student_id);
            if($student){
                if($entity_type == 'organization'){
                    $organizations = $student->organizations()->find($entity_id);
                    if($organizations){
                        $student->organizations()->detach($entity_id);
                    }
                }else if($entity_type == 'instructor'){
                    $instructor = $student->instructors()->find($entity_id);
                    if($instructor){
                        $student->instructors()->detach($entity_id);
                    }
                }
                else {
                   $checkpoint = $student->checkpoints()->find($entity_id);
                    if($checkpoint){  
                        // Log::info('We found the checkpoint');   
                    $checkpoint = Checkpoint::find($entity_id);
                    $checkpoint->student_id = null;
                    $checkpoint->save();
                    }
                }
            }
            return Redirect::to('/student/view/'.$student_id);
            // return redirect('/student/view/'.$student_id);
        }else {
            return Redirect::to('/dashboard');
        }
    }
    public function destroy(Request $request, string $id)
    {
        if(UserRole::is_student($request)){
            return redirect('/not-allowed');
        }
        $student = Student::find($id);

        if(!$student){
            return Redirect::route('student.index');
        }
        $checkpoints = $student->checkpoints;
        
        foreach($checkpoints as $checkpoint){
            $checkpoint->delete();
        }
        $student->organizations()->detach();
        $student->instructors()->detach();

        $student->users()->delete();
        $student->delete();
        return Redirect::route('student.index');
    }
}

<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use App\Http\Utils\DBUtils;
use App\Http\Utils\UserRole;
use App\Models\Instructor;
use App\Models\Organization;
use App\Models\Student;
use App\Models\User;
use Faker\Core\Uuid;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class StudentController extends Controller
{
    public function index(Request $request)
    {
        $name = $request->query('name')??'';
        $paginate = $request->query('paginate')??5;
        $email = $request->query('email')??'';
        $id = $request->query('id')??'';
        // $address = $request->query('address')??'';
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
            ->where('id', 'like', '%' . $id . '%')
            ->whereHas('organizations', function ($query) use ($orgName) {
                $query->where('name', 'like', '%'.$orgName.'%');
            })
            ->paginate($paginate);
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
        // $request->validate([
        //     'name' => 'required|string|max:255',
        //     'email' => 'required|string|email|max:255|unique:'.User::class,
        //     'password' => ['required', 'confirmed', Rules\Password::defaults()],
        //     'contact'=> 'requitrd',
        //     'username'=> 'required|string|max:30|unique:'.User::class,
        //     'address' => 'required|string|min:20'
        // ]);

        if(UserRole::is_student($request)){
            return redirect('/not-allowed');
        }
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'address'=> $request->address,
            'contact'=> $request->contact,
            'username'=> $request->username,
            'role'=> 'student',
        ]);

        $student = Student::create([
            'parent_name'=> $request->parent_name??'',
            'parent_relationship' => $request->parent_relationship
        ]);
        $student->users()->associate($user);
        $student->save();
      

        return redirect('/student/view/'.$student->id);

        // event(new Registered($user));
        // $organization = Organization::create([
        //     'created_by'=> $request->user()->id,
        //     'name'=> $request->name,  
        //     'logo'=>'/laptop.jpg'
        // ]);


        // try {
        //     Storage::copy('temp/64a6a0829d03a-1688641666.png', 'app/organizations/file.png');
        // } catch (\Throwable $th) {
        //     //throw $th;
        // }
        // return redirect('/organization/view/');
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
        $collection = $request->query('collection');
        $searchBy = $request->query('searchBy')??'name';
        $q = $request->query('q')??'';
        $searchData = ($collection && $searchBy) ? DBUtils::get_search_data($collection, $searchBy, $q)??array() : array();
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
        if(UserRole::is_student($request)){
            return redirect('/not-allowed');
        }
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
    public function attach(Request $request){
        if(!UserRole::is_admin($request) || !UserRole::is_organization($request)){
            return redirect('/dashboard');
        }
        $form = $request->all();
        $student_id = $form['id']??'1';
        $entity_type = $form['entityType'];
        $entity_id = $form['entityId'];
        if($student_id && $entity_type && $entity_id){
            $student = Student::with(['instructors', 'organizations', 'checkpoints'])
            ->find($student_id);
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
        }
        return redirect('/student/view/'.$student_id);
    }
    public function destroy(Request $request, string $id)
    {
        if(UserRole::is_student($request)){
            return redirect('/not-allowed');
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
}

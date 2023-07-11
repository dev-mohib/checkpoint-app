<?php

namespace App\Http\Controllers\Student;

use App\Http\Controllers\Controller;
use App\Http\Utils\UserType;
use App\Models\Instructor;
use App\Models\Organization;
use App\Models\Student;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
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
        $email = $request->query('email')??'';
        $id = $request->query('id')??'';
        $address = $request->query('address')??'';
        $username = $request->query('username')??'';
        $organization = $request->query('username')??'';

        $students = Student::with(['organizations', 'users'])
        ->whereHas('users', function ($query) use ($name) {
            $query->where('name', 'like', '%'.$name.'%');
        })
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
        return Inertia::render('Student/index', ['title' => 'Students', 'activeMenu'=> 'student', 'students'=>$students]);
       
    }

    public function create()
    {
        //
        return Inertia::render('Organization/create/index', ['title' => 'Create instructor', 'activeMenu'=> 'instructor']);
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
        
        $user = User::create([
            'name' => $request->name.' - Student',
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'address'=> $request->address,
            'contact'=> $request->contact,
            'username'=> $request->username,
            'type'=> 'organization',
        ]);

        event(new Registered($user));
        $organization = Organization::create([
            'created_by'=> $request->user()->id,
            'name'=> $request->name,  
            'logo'=>'/laptop.jpg'
        ]);


        try {
            Storage::copy('temp/64a6a0829d03a-1688641666.png', 'app/organizations/file.png');
        } catch (\Throwable $th) {
            //throw $th;
        }
        return redirect('/organization/view/');
    }

    public function show(string $id)
    {
        $instructor = Instructor::with([
            'students','organizations', 'checkpoints','users', 'organizations.users', 'students.users'
            ])
        ->find($id);
        Log::info($instructor);
        if(!$instructor){
            return Inertia::render('Instructor/show/index',['isEmpty'=> true, 'title'=> 'Instructor', 'activeMenu'=>'instructor']);
        }else {
            return Inertia::render('Instructor/show/index',['instructor' => $instructor, 'isEmpty'=> false, 'title'=>'Instructor','activeMenu'=>'instructor']);
        }
    }
    public function showEdit(string $id)
    {   
        // $id = $request->query('id');
        $organization = Organization::with(['users'])
        ->find($id);
        if(!$organization){
            return Inertia::render('Organization/edit/index',['isEmpty'=> true, 'title'=> 'Edit Organization', 'activeMenu'=>'organization', 'isFound'=>false]);
        }else {
            return Inertia::render('Organization/edit/index',['organization' => $organization, 'isEmpty'=> false, 'title'=>'Organization','activeMenu'=>'organization', 'isFound'=>true]);
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
}

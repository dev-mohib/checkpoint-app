<?php

namespace App\Http\Controllers\Checkpoint;

use App\Http\Controllers\Controller;
use App\Http\Utils\UserRole;
use App\Http\Utils\UserType;
use App\Models\Checkpoint;
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

class CheckpointController extends Controller
{
    public function index(Request $request)
    {
        $id = $request->query('id')??'';
        $name = $request->query('name')??'';
        $orgName = $request->query('orgName')??'';
        $orgId = $request->query('orgId');
        $instructorName = $request->query('instructorName');
        $studentName = $request->query('studentName');

        // if(UserType::is_student($request)){
        //     return UserType::notAllowed();
        // }
        $userId = $request->user()->id;
            $checkpoints = Checkpoint::with(['organizations', 'students.users', 'instructors.users'])
            ->where('name', 'like', '%'.$name.'%')
            ->whereHas('organizations', function ($query) use ($orgName) {
                $query->where('name', 'like', '%'.$orgName.'%');
            })
            ->whereHas('organizations', function ($query) use ($orgId) {
                $query->where('id', 'like', '%'.$orgId.'%');
            })
            ->whereHas('instructors.users', function ($query) use ($instructorName) {
                $query->where('name', 'like', '%'.$instructorName.'%');
            })
            ->whereHas('students.users', function ($query) use ($studentName) {
                $query->where('name', 'like', '%'.$studentName.'%');
            })
            ->where('id', 'like', '%' . $id . '%');
            // ->paginate(5);

            if(UserRole::is_admin($request)){
                $checkpoints = $checkpoints
                ->whereHas('organizations', function ($query) use ($orgName) {
                    $query->where('name', 'like', '%'.$orgName.'%');
                })->paginate(5);
            } else if(UserRole::is_organization($request)){
                $checkpoints = $checkpoints
                ->whereHas('organizations', function ($query) use ($userId) {
                    $query->where('organizations.id', $userId);
                })->paginate(5);
            }else if(UserRole::is_instructor($request)){
                $checkpoints = $checkpoints
                ->whereHas('instructors', function ($query) use ($userId) {
                    $query->where('instructors.id', $userId);
                })->paginate(5);
            }else if(UserRole::is_student($request)){
                $checkpoints = $checkpoints
                ->whereHas('students', function ($query) use ($userId) {
                    $query->where('students.id', $userId);
                })->paginate(5);
            }

            return Inertia::render('Checkpoint/index', ['title' => 'Checkpoints', 'activeMenu'=> 'checkpoint', 'checkpoints'=>$checkpoints, 'canAccess'=>true]);
    }

    public function create(Request $request)
    {
        $searchBy = $request->query('searchBy');
        $query = $request->query('query');
        if($searchBy == 'name'){
            $searchData =DB::table('organizations')->
            where('name', 'like', '%'.$query.'%')->get();
            return Inertia::render('Student/create/index', ['title' => 'Create Student', 'activeMenu'=> 'student', 'showSearch'=>true, 'searchData'=>$searchData]);
        }
        if($searchBy == 'id'){
            $searchData = DB::table('organizations')->where('id', $query)->get();
            return Inertia::render('Student/create/index', ['title' => 'Create Student', 'activeMenu'=> 'student', 'showSearch'=>true, 'searchData'=>$searchData]);
        }

        return Inertia::render('Student/create/index', ['title' => 'Create Student', 'activeMenu'=> 'student']);
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
        $selectedOrgs = $request->selectedOrgs;
        // Log::info(['name'=>$request->name, 'email'=>$request->email, 'selectedOrgs'=>$selectedOrgs]);
        // return Inertia::render('Instructor/show/index', ['isEmpty'=> true, 'title'=> 'Instructor', 'activeMenu'=>'instructor']);
        $ids = array_map(function($item) {
            return $item['id'];
        }, $selectedOrgs);
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'address'=> $request->address,
            'contact'=> $request->contact,
            'username'=> $request->username,
            'role'=> 'instructor',
        ]);

        $instructor = Instructor::create([
            'qualification'=> $request->qualification
        ]);
        $instructor->users()->associate($user);
        $instructor->save();
        $instructor->organizations()->attach($ids);

        return redirect('/instructor/view/'.$instructor->id);

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
        $checkpoint = Checkpoint::with([
            'students','organizations', 'instructors', 'students.users', 'instructors.users', 'organizations.users'
            ])
        ->find($id);
        $collection = $request->query('collection');
        $searchBy = $request->query('searchBy');
        $q = $request->query('q');
        $searchData = ($collection && $searchBy) ? $this->getFilterData($searchBy, $q, $collection) : array();

        if(!$checkpoint){
            return Inertia::render('Checkpoint/show/index',
                [
                    'isEmpty'=> true, 'title'=> 'Checkpoint', 
                    'activeMenu'=>'checkpoint',
                    'showModal'=>$searchData ? true : false,
                    'searchData'=>$searchData, 'canAccess'=>true
            ]);
        } else {
            return Inertia::render('Checkpoint/show/index',
                [
                    'checkpoint' => $checkpoint, 'isEmpty'=> false, 
                    'title'=>'Checkpoint','activeMenu'=>'checkpoint',
                    'showModal'=>$searchData ? true : false,
                    'searchData'=>$searchData, 'canAccess'=>true
                ]);
        }
    }

    public function getFilterData($searchBy, $q, $collection='organizations'){
        if($collection == 'organizations'){
            $data = $searchBy == 'name' ?  
            DB::table($collection)->where('name', 'like', '%'.$q.'%')->take(10)->get()->toArray()
            :
            DB::table($collection)->where('id', $q)->take(10)->get()->toArray();
            $filteredOrgs = array_map(function($item) {
                return [
                    'name' => $item->name,
                    'id' => $item->id,
                    'logo' => $item->logo
                ];
            },$data);
            return $filteredOrgs;
        }else if($collection == 'students'){
            $data = $searchBy == 'name' ?  
            Student::with('users')
            ->whereHas('users', function ($query) use ($q) {
                $query->where('name', 'like', '%'.$q.'%');
            })->take(10)->get()->toArray()
            :Student::with('users')->find($q)->take(10)->get()->toArray();
            $filteredOrgs = array_map(function($item) {
                return [
                    'name' => $item['users']['name'],
                    'id' => $item['id'],
                    'logo' => '/laptop.jpg'
                ];
            },$data);
            return $filteredOrgs;
        }
        else if($collection == 'checkpoints'){
            $data = $searchBy == 'name' ?  
            DB::table($collection)->where('name', 'like', '%'.$q.'%')->take(10)->get()->toArray()
            :DB::table($collection)->where('id', $q)->take(10)->get()->toArray();
            $filteredOrgs = array_map(function($item) {
                return [
                    'name' => $item->name,
                    'id' => $item->id,
                    'logo' => '/laptop.jpg'
                ];
            },$data);
            return $data;
        }
        return array();
    }
    public function showEdit(string $id)
    {   
        // $id = $request->query('id');
        $instructor = Instructor::with(['users'])
        ->find($id);
        if(!$instructor){
            return Inertia::render('Instructor/edit/index',['isEmpty'=> true, 'title'=> 'Edit Organization', 'activeMenu'=>'organization', 'isFound'=>false]);
        }else {
            return Inertia::render('Instructor/edit/index',['instructor' => $instructor, 'isEmpty'=> false, 'title'=>'Organization','activeMenu'=>'organization', 'isFound'=>true]);
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

    public function attachEntity(Request $request){
        $attachId = $request->attachId;
        $instructorId = $request->instructorId;

        Log::info(['instructorId'=>$instructorId, 'attachId'=>$attachId]);
    }

    public function search(Request $request){
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
            // if($searchBy == 'name'){
                
            // }
            $filteredOrgs = array_map(function($item) {
                return ['name'=>$item['name'], 'id'=>$item['id'],'type'=>'organization'];//$item['id'];
            }, $searchOrganizations);
            Log::info(['searchBy' => $searchBy, 'attachId'=>$input, 'instructor'=>$instructor]);
            return Inertia::render('Instructor/show/index',['instructor' => $instructor, 'showOrgModal'=> true, 'title'=>'Instructor','activeMenu'=>'instructor', 'searchData'=>$filteredOrgs]);
        }else {
            $instructor = DB::table('instructors')
            ->join('organizations', 'organizations.name', 'like', '%'.$input.'%')
            ->select('organizations.* as organizations')
            ->get();
            Log::info(['searchBy' => $searchBy, 'attachId'=>$input, 'instructor'=>$instructor]);
            return Inertia::render('Instructor/show/index',['instructor' => $instructor, 'showOrgModal'=> true, 'title'=>'Instructor','activeMenu'=>'instructor']);
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

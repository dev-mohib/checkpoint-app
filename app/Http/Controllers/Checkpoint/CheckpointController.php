<?php

namespace App\Http\Controllers\Checkpoint;

use App\Http\Controllers\Controller;
use App\Http\Utils\DBUtils;
use App\Http\Utils\UserRole;
use App\Models\Checkpoint;
use App\Models\Instructor;
use App\Models\Organization;
use App\Models\Student;
use App\Models\User;
use Faker\Core\Uuid;
use Illuminate\Auth\Events\Registered;
use Illuminate\Database\Eloquent\Collection;
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
        $paginate = $request->paginate??10;

        $userId = $request->user()->id;
            $checkpoints = Checkpoint::with(['organizations','students', 'students.users', 'instructors','instructors.users'])
            ->where('name', 'like', '%'.$name.'%')
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
            if(UserRole::is_admin($request)){
                $checkpoints = $checkpoints
                ->whereHas('organizations', function ($query) use ($orgName) {
                    $query->where('name', 'like', '%'.$orgName.'%');
                })
                ->orWhereNull('organization_id')->paginate($paginate);
            } else if(UserRole::is_organization($request)){
                $checkpoints = $checkpoints
                ->whereHas('organizations', function ($query) use ($userId) {
                    $query->where('organizations.id', $userId);
                })->paginate($paginate);
            }else if(UserRole::is_instructor($request)){
                $checkpoints = $checkpoints
                ->whereHas('instructors', function ($query) use ($userId) {
                    $query->where('instructors.id', $userId);
                })->paginate($paginate);
            }else if(UserRole::is_student($request)){
                $checkpoints = $checkpoints
                ->whereHas('students', function ($query) use ($userId) {
                    $query->where('students.id', $userId);
                })->paginate($paginate);
            }

            return Inertia::render('Checkpoint/index', ['title' => 'Checkpoints', 'activeMenu'=> 'checkpoint', 'checkpoints'=>$checkpoints, 'canAccess'=>true]);
    }
    public function create(Request $request)
    {
        return Inertia::render('Checkpoint/create/index', ['title' => 'Create Checkpoint', 'activeMenu'=> 'checkpoint', 'canAccess'=>true]);
    }
    public function store(Request $request)
    {
        $request['validity_period'] = $request->type != 'Completion' ? 'Permanent' : $request['validity_period'];
        $request->validate([
            'name' => 'required|string|max:255|min:5',
            'description' => 'required|string|max:400|min:10',
            'type' => 'required',
            'validity_period' =>  'required'
        ]);
        $checkpoint = Checkpoint::create([
            'name'=> $request->name,
            'description' => $request->description,
            'validity_period'=> $request->validity_period
        ]);

        return redirect('/checkpoint/view/'.$checkpoint->id);
    }
    public function show(Request $request, string $id)
    {
        $checkpoint = Checkpoint::with([
            'students','organizations', 'instructors', 'students.users', 'instructors.users', 'organizations.users'
            ])
        ->find($id);
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
        Log::info($checkpoint);
        if(!$checkpoint){
            return Inertia::render('Checkpoint/show/index',
                [
                    'isEmpty'=> true, 'title'=> 'Checkpoint', 
                    'activeMenu'=>'checkpoint',
                    'canAccess'=>true
                ]);
        } else {
            return Inertia::render('Checkpoint/show/index',
                [
                    'checkpoint' => $checkpoint, 'isEmpty'=> false, 
                    'title'=>'Checkpoint','activeMenu'=>'checkpoint',
                    'searchData'=>$searchData, 'canAccess'=>true
                ]);
        }
    }
    public function showEdit(string $id)
    {   
        // $id = $request->query('id');
        $checkpoint = Checkpoint::find($id);
        if(!$checkpoint){
            return Inertia::render('Checkpoint/edit/index',['isEmpty'=> true, 'title'=> 'Edit', 'activeMenu'=>'checkpoint', 'isFound'=>false, 'canAccess'=>true]);
        }else {
            return Inertia::render('Checkpoint/edit/index',['checkpoint' => $checkpoint, 'isEmpty'=> false, 'title'=>'Edit','activeMenu'=>'checkpoint', 'isFound'=>true, 'canAccess'=>true]);
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
        if(!UserRole::is_admin($request) || !UserRole::is_organization($request)){
            return redirect('/dashboard');
        }
        $form = $request->all();
        $checkpoint_id = $form['id']??'1';
        $entity_type = $form['entityType'];
        $entity_id = $form['entityId'];
        if($checkpoint_id && $entity_type && $entity_id){
            $checkpoint = Checkpoint::with(['instructors', 'organizations', 'students'])
            ->find($checkpoint_id);
            if($checkpoint){
                if($entity_type == 'organization'){
                    $organizations = $checkpoint->organizations()->find($entity_id);
                    if(!$organizations){
                        $checkpoint->organizations()->attach($entity_id);
                    }
                }else if($entity_type == 'instructor'){
                    $instructor = $checkpoint->instructors()->find($entity_id);
                    if(!$instructor){
                        $checkpoint->instructors()->attach($entity_id);
                    }
                }
                else {
                   $student = $checkpoint->students()->find($entity_id);
                    if(!$student){
                        $checkpoint->students()->attach($entity_id);
                    }
                }
            }
        }
        return redirect('/checkpoint/view/'.$checkpoint_id);
    }
    public function detachEntity(Request $request){
        if(!UserRole::is_admin($request) || !UserRole::is_organization($request)){
            return redirect('/dashboard');
        }
        $form = $request->all();
        $checkpoint_id = $form['id'];
        $entity_type = $form['entityType'];
        $entity_id = $form['entityId'];
        if($checkpoint_id && $entity_type && $entity_id){
            $checkpoint = Checkpoint::with(['instructors', 'organizations', 'students'])
            ->find($checkpoint_id);
            if($checkpoint){
                if($entity_type == 'organization'){
                    $organizations = $checkpoint->organizations()->find($entity_id);
                    if(!$organizations){
                        $checkpoint->organizations()->detach($entity_id);
                    }
                }else if($entity_type == 'instructor'){
                    $instructor = $checkpoint->instructors()->find($entity_id);
                    if(!$instructor){
                        $checkpoint->instructors()->detach($entity_id);
                    }
                }
                else {
                   $student = $checkpoint->students()->find($entity_id);
                    if(!$student){
                        $checkpoint->students()->detach($entity_id);
                    }
                }
            }
        }
        return redirect('/checkpoint/view/'.$checkpoint_id);
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

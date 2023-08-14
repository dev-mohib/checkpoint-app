<?php

namespace App\Http\Controllers\Checkpoint;

use App\Http\Controllers\Controller;
use App\Http\Utils\DBUtils;
use App\Http\Utils\UserRole;
use App\Models\Checkpoint;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
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
            $id = DBUtils::getOrganizationId($request);
            $checkpoints = $checkpoints
            ->whereHas('organizations', function ($query) use ($id) {
                $query->where('organizations.id', $id);
            })->paginate($paginate);
        }else if(UserRole::is_instructor($request)){
            $id = DBUtils::getInstructorId($request);
            $checkpoints = $checkpoints
            ->whereHas('instructors', function ($query) use ($id) {
                $query->where('instructors.id', $id);
            })->paginate($paginate);
        }else if(UserRole::is_student($request)){
            $id = DBUtils::getStudentId($request);
            $checkpoints = $checkpoints
            ->whereHas('students', function ($query) use ($id) {
                $query->where('students.id', $id);
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
            'validity_period'=> $request->validity_period,
            'images'=>json_encode([])
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
    public function showEdit(Request $request, string $id)
    {   
        // $id = $request->query('id');
        $checkpoint = Checkpoint::find($id);
        if(!$checkpoint){
            return Inertia::render('Checkpoint/edit/index',['isEmpty'=> true, 'title'=> 'Edit', 'activeMenu'=>'checkpoint', 'isFound'=>false, 'canAccess'=>true]);
        }else {
            return Inertia::render(UserRole::is_instructor($request) ? 'Checkpoint/edit/instructor' : 'Checkpoint/edit/index',['checkpoint' => $checkpoint, 'isEmpty'=> false, 'title'=>'Edit','activeMenu'=>'checkpoint', 'isFound'=>true, 'canAccess'=>true]);
        }
    }
    public function update(Request $request)
    {
        $form = $request->all();
        $checkpoint = Checkpoint::with('instructors')
        ->find($form['id']);

        $images = array();
       if(UserRole::is_instructor($request)){
        if($form['instructor_recommendation']){
            $checkpoint->instructor_recommendation = $form['instructor_recommendation'];
        }
        if($form['instructor_input'] || $form['instructor_input'] == ''){
            $checkpoint->instructor_input = $form['instructor_input'];
        }
        if($form['validity_period'] || $form['validity_period'] == ''){
            $checkpoint->validity_period = $form['validity_period'];
        }

        if($form['achieved_gradepoints'] || $form['achieved_gradepoints'] = ''){
            $checkpoint->achieved_gradepoints = $form['achieved_gradepoints'];
        }
        if($form['badge']){
            Storage::delete('public/checkpoint-badge/'.$checkpoint->badge);
            Storage::move('temp/checkpoint-badge/'.$form['badge'], 'public/checkpoint-badge/'.$form['badge']);
            $checkpoint->badge = $form['badge'];
        }
        if($form['certificate']){
            Storage::delete('public/checkpoint-certificate/'.$checkpoint->certificate);
            Storage::move('temp/checkpoint-certificate/'.$form['certificate'], 'public/checkpoint-certificate/'.$form['certificate']);
            $checkpoint->certificate = $form['certificate'];
        }
        foreach($form['images'] as $image){
            if($image['action'] == "add"){
                Storage::move('temp/checkpoint-image/'.$image['src'], 'public/checkpoint-image/'.$image['src']);
                array_push($images, $image['src']);
            }else if($image['action'] == "remove"){
                Storage::delete('public/checkpoint-image/'.$image['src']);
            }else {
                array_push($images, $image['src']);
            }
        }
        $checkpoint->images= $images;
       } else {
            $checkpoint->name = $form['name'];
            $checkpoint->description = $form['description'];
            $checkpoint->type = $form['type']; 
       }
        $checkpoint->save(); 
        return Redirect::route('checkpoint.show',['id'=>$form['id']]);
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
                    if($organizations){
                        $checkpoint->organizations()->detach($entity_id);
                    }
                }else if($entity_type == 'instructor'){
                    $instructor = $checkpoint->instructors()->find($entity_id);
                    if($instructor){
                        $checkpoint->instructors()->detach($entity_id);
                    }
                }
                else {
                   $student = $checkpoint->students()->find($entity_id);
                    if($student){
                        $checkpoint->students()->detach($entity_id);
                    }
                }
            }
        }
        return Redirect::to('/checkpoint/view/'.$checkpoint_id);
    }
    public function destroy(string $id)
    {
        $checkpoint = Checkpoint::find($id);
        $images = $checkpoint->images;
        try {
            foreach($images as $image){
                Storage::delete('public/checkpoint-image/'.$image);
            }
        } catch (\Throwable $th) {
            
        }
        Storage::delete('public/checkpoint-certificate/'.$checkpoint->certificate);
        Storage::delete('public/checkpoint-badge/'.$checkpoint->badge);
        $checkpoint->delete();

        return Redirect::route('checkpoint.index');
    }
}

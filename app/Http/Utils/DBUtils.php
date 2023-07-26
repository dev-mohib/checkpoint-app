<?php

namespace App\Http\Utils;

use App\Models\Instructor;
use App\Models\Organization;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class DBUtils{
    public static function get_admin_search_data(String $collection, String $searchBy, String $q){
        if($collection == 'organization'){ 
            $data = DB::table('organizations')->select('id', 'name');
            $data = $searchBy == 'id' ? $data->where('id', $q)->get() : $data->where('name', 'like', '%' . $q . '%')->get();
            Log::info($data);
            return $data;

        }else if($collection == 'instructor') {
            $data = DB::table('instructors')
            ->join('users','instructors.user_id', '=', 'users.id')
            ->select('instructors.id', 'users.name');
            $data = $searchBy == 'id' ? $data->where('instructors.id', $q) : $data->where('users.name', 'like', '%' . $q . '%');
            return $data->get();
        }else if($collection == 'student'){
            $data = DB::table('students')
            ->join('users','students.user_id', '=', 'users.id')
            ->select('students.id', 'users.name');
            $data = $searchBy == 'id' ? $data->where('students.id', $q) : $data->where('users.name', 'like', '%' . $q . '%');
            return $data->get();
        }else if($collection == 'checkpoint'){
            $data = DB::table('checkpoints')
            ->select('id', 'name');
            $data = $searchBy == 'id' ? $data->where('checkpoints.id', $q) : $data->where('checkpoints.name', 'like', '%' . $q . '%')->where('checkpoints.organization_id', '=', NULL);
            return $data->get();
        }
        return array();
    }
    
    public static function get_organization_search_data(String $collection, String $searchBy, String $q, $user_id){
        $data = Organization::with(['users', 'students', 'instructors', 'checkpoints', 'students.users', 'instructors.users'])
        ->where('user_id', '=', $user_id)->first();

        if($collection == 'instructor'){
            $instructors = $data->students()->with(['users']);
            if($searchBy == 'id'){
                $instructors = $instructors->where('id','=', $q)->get();
            }else {
                $instructors = $instructors->whereHas('users', function ($query) use ($q) {
                    $query->where('name', 'like', '%'.$q.'%');
                });
            }
            $instructors = $instructors->get();
            foreach($instructors as $instructor){
                $instructor->name = $instructor->users->name;
            }
            return $instructors;
        }else if($collection == 'student'){
            $students = $data->students()->with(['users']);
            if($searchBy == 'id'){
                $students = $students->where('id','=', $q)->get();
            }else {
                $students = $students->whereHas('users', function ($query) use ($q) {
                    $query->where('name', 'like', '%'.$q.'%');
                });
            }
            $students = $students->get();
            foreach($students as $student){
                $student->name = $student->users->name;
            }
            return $students;
        }
        else if($collection == 'checkpoint'){
            $checkpoints = $data->checkpoints();
            $checkpoints = $searchBy == 'name' ? $checkpoints->where('name', 'like', '%' . $q . '%')->get() : $checkpoints->where('id','=', $q)->get();
            return $checkpoints;
        }
        return array();
    }

    public static function get_instructor_search_data(String $collection, String $searchBy, String $q, $user_id){
        $data = Instructor::with(['users', 'students', 'checkpoints', 'students.users'])
        ->where('user_id', '=', $user_id)->first();

         if($collection == 'student'){
            $students = $data->students()->with(['users']);
            if($searchBy == 'id'){
                $students = $students->where('id','=', $q)->get();
            }else {
                $students = $students->whereHas('users', function ($query) use ($q) {
                    $query->where('name', 'like', '%'.$q.'%');
                });
            }
            $students = $students->get();
            foreach($students as $student){
                $student->name = $student->users->name;
            }
            return $students;
        }
        else if($collection == 'checkpoint'){
            $checkpoints = $data->checkpoints();
            $checkpoints = $searchBy == 'name' ? $checkpoints->where('name', 'like', '%' . $q . '%')->get() : $checkpoints->where('id','=', $q)->get();
            return $checkpoints;
        }
        return array();
    }
    public static function get_attach_list($roll, $table1, $table2){

    }
}
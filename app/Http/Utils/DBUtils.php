<?php

namespace App\Http\Utils;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class DBUtils{
    public static function get_search_data(String $collection, String $searchBy, String $q){
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
            $data = $searchBy == 'id' ? $data->where('checkpoints.id', $q) : $data->where('checkpoints.name', 'like', '%' . $q . '%');
            return $data->get();
        }
        return array();
    }
    
    public static function get_attach_list($roll, $table1, $table2){

    }
}
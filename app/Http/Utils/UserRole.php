<?php

namespace App\Http\Utils;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;

class UserRole {
    public static function is_admin($request){

        if($request->user()->role == 'admin'){
            return true;
        }else{
            return false;
        }
    }

    public static function is_instructor($request){
        if($request->user()->role == 'instructor'){
            return true;
        }else{
            return false;
        }
    }

    public static function get_organization_data($request){
        $data = DB::table('organizations')
        ->where('user_id', '=', $request->user()->id)
        ->select()
        ->first();
        return $data;
    }

    public static function get_instructor_data($request){
        $data = DB::table('instructors')
        ->where('user_id', '=', $request->user()->id)
        ->select()
        ->first();
        return $data;
    }
    public static function get_student_data($request){
        $data = DB::table('students')
        ->where('user_id', '=', $request->user()->id)
        ->select()
        ->first();
        return $data;
    }
    public static function is_organization($request){
        if($request->user()->role == 'organization'){
            return true;
        }else{
            return false;
        }
    }

    public static function is_student($request){
        if($request->user()->role == 'student'){
            return true;
        }else{
            return false;
        }
    }
    public static function notAllowed(){
        return redirect('/not-allowed');
    }
}
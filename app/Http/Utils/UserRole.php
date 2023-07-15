<?php

namespace App\Http\Utils;

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
        return Redirect::to('/not-allowed');
    }
}
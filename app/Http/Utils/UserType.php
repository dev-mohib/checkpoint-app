<?php

namespace App\Http\Utils;

use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;

class UserType {
    public static function is_admin($request){

        if($request->user()->type == 'admin'){
            return true;
        }else{
            return false;
        }
    }

    public static function is_instructor($request){
        if($request->user()->type == 'instructor'){
            return true;
        }else{
            return false;
        }
    }

    public static function is_student($request){
        if($request->user()->type == 'instructor'){
            return true;
        }else{
            return false;
        }
    }
    public static function notAllowed(){
        return Redirect::to('/not-allowed');
    }
}
<?php

namespace App\Http\Utils;

use Illuminate\Support\Facades\Storage;

class AppMedia{
    public static function get_organization_logo(string $file){
        $contents = Storage::get('laptop.jpg');
        return $contents;
    }

    public static function get_public_image(){
        // return Storage::url('app/public/laptop.jpg');
        $contents = Storage::get('laptop.jpg');
        return $contents;
    }

    public static function get_organization_doc(string $file){
        
    }
}
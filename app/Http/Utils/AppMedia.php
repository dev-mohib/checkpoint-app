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

    function getFilesOlderThanDate($directory, $date)
    {
        // $directory = 'public'; //OR $directory = storage_path('app/public');
        // $date = '2023-01-01'
        $files = Storage::files($directory);

        $filteredFiles = [];
        foreach ($files as $file) {
            $fileDate = Storage::lastModified($file);
            if ($fileDate < strtotime($date)) {
                $filteredFiles[] = $file;
            }
        }
        return $filteredFiles;
    }
}
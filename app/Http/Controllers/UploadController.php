<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class UploadController extends Controller
{
    //
    public function uploadFilePond(Request $request, string $path){
        $id = $request->query('id');
        if($request->hasFile(key: $path)){
            $file = $request->file($path);
            $path = 'temp/'.$path.'/'.$id.'.'.$file->extension();
            $file->storeAs(path: $path);
            return $path;
        }
    }

    public function deleteFilePond(Request $request, string $path){
        $id = $request->query('id');
        $path = 'temp/'.$path.'/'.$id;
        Log::info($path);
        Storage::delete($path);

    }

    public function storeOrganizationDoc(Request $request){
        $key = $request->query('key');
        if($request->hasFile(key: 'organization-document')){
            $file = $request->file('organization-document');
            $path = 'temp/organization-document/'.$key.'.'.$file->extension();
            $file->storeAs(path: $path);
            return $path;
        }
        return '';
    }

    public function storeCheckpointImage(Request $request){
        $key = $request->query('key');
        if($request->hasFile(key: 'checkpoint-image')){
            $file = $request->file('checkpoint-image');
            $path = 'temp/checkpoint-image/'.$key.'.'.$file->extension();
            $file->storeAs(path: $path);
            return $path;
        }
        return 'IMG-12345678.jpg';
    }


    public function storeOrganizationLogo(Request $request){
        $key = $request->query('key');
        if($request->hasFile(key: 'organization-logo')){
            $file = $request->file('organization-logo');
            $path = 'temp/organization-logo/'.$key.'.'.$file->extension();
            $file->storeAs(path: $path);
            return $path;
        }
        return '';
    }
   

    public function storeInstructorPhotoFront(Request $request){
        $key = $request->query('key');
        if($request->hasFile(key: 'instructor-photo-front')){
            $file = $request->file('instructor-photo-front');
            $path = 'temp/instructor-photo-front/'.$key.'.'.$file->extension();
            $file->storeAs(path: $path);
            return $path;
        }
        return '';
    }

    public function storeInstructorPhotoBack(Request $request){
        $key = $request->query('key');
        if($request->hasFile(key: 'instructor-photo-back')){
            $file = $request->file('instructor-photo-back');
            $path = 'temp/instructor-photo-back/'.$key.'.'.$file->extension();
            $file->storeAs(path: $path);
            return $path;
        }
        return '';
    }


    public function storeCheckpointBadge(Request $request){
        $key = $request->query('key');
        if($request->hasFile(key: 'checkpoint-badge')){
            $file = $request->file('checkpoint-badge');
            $path = 'temp/checkpoint-badge/'.$key.'.'.$file->extension();
            $file->storeAs(path: $path);
            return $path;
        }
        return '';
    }

    public function storeCheckpointCertificate(Request $request){
        $key = $request->query('key');
        if($request->hasFile(key: 'checkpoint-certificate')){
            $file = $request->file('checkpoint-certificate');
            $path = 'temp/checkpoint-certificate/'.$key.'.'.$file->extension();
            $file->storeAs(path: $path);
            return $path;
        }
        return '';
    }



    public function deleteOrganizationDoc(Request $request){
        return '';
    }

    public function deleteOrganizationLogo(Request $request){
        return '';
    }


    public function deleteInstructorPhotoFront(Request $request){
        return '';
    }

    public function deleteInstructorPhotoBack(Request $request){
        return '';
    }


    public function deleteCheckpointBadge(Request $request){
        return '';
    }
}

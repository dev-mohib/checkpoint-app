<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class UploadController extends Controller
{
    //

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
    public function upload(Request $request){
        $key = $request->query('key');
        if($request->hasFile(key: 'organization-document')){
            $file = $request->file('organization-document');
            $path = 'temp/organization-docs/'.uniqid().'-'.now()->timestamp.'.'.$file->extension();
            $file->storeAs(path: $path);
            return $path;
        }
        return '';
    }

    public function storeInstructorPhotoFront(Request $request){
        if($request->hasFile(key: 'instructor-photo-front')){
            $file = $request->file('instructor-photo-front');
            $path = 'temp/instructor-photo-front/'.uniqid().'-'.now()->timestamp.'.'.$file->extension();
            $file->storeAs(path: $path);
            return $path;
        }
        return '';
    }

    public function storeInstructorPhotoBack(Request $request){
        if($request->hasFile(key: 'instructor-photo-back')){
            $file = $request->file('instructor-photo-back');
            $path = 'temp/instructor-photo-back/'.uniqid().'-'.now()->timestamp.'.'.$file->extension();
            $file->storeAs(path: $path);
            return $path;
        }
        return '';
    }


    public function storeCheckpointDoc(Request $request){
        if($request->hasFile(key: 'checkpoint-doc')){
            $file = $request->file('checkpoint-doc');
            $path = 'temp/checkpoint-doc/'.uniqid().'-'.now()->timestamp.'.'.$file->extension();
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


    public function deleteInstructorPhotoId(Request $request){
        return '';
    }


    public function deleteCheckpointDoc(Request $request){
        return '';
    }
}

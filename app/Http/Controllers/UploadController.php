<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UploadController extends Controller
{
    //

    public function storeOrganizationDoc(Request $request){
        if($request->hasFile(key: 'organization-document')){
            $file = $request->file('organization-document');
            $path = 'temp/organization-docs/'.uniqid().'-'.now()->timestamp.'.'.$file->extension();
            $file->storeAs(path: $path);

            return $path;

        }
        return '';
    }

    public function storeOrganizationLogo(Request $request){
        if($request->hasFile(key: 'organization-logo')){
            $file = $request->file('organization-logo');
            $path = 'temp/organization-logos/'.uniqid().'-'.now()->timestamp.'.'.$file->extension();
            
            $file->storeAs(path: $path);
            return $path;

        }
        return '';
    }


    public function storeInstructorPhotoId(Request $request){
        if($request->hasFile(key: 'instructor-photo-id')){
            $file = $request->file('instructor-photo-id');
            $path = 'temp/instructor-photo-id/'.uniqid().'-'.now()->timestamp.'.'.$file->extension();

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

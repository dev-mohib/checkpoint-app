<?php

use App\Http\Controllers\Organization\OrganizationController;
use App\Http\Controllers\UploadController;
use Illuminate\Support\Facades\File;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/', function(Request $request){
    return ['name'=> 'Mohib Ali', 'age'=> 20, 'email'=> "dev.mohib@gmail.com"];
});

Route::middleware('auth')->group(function(){
    Route::get('/organization/search', [OrganizationController::class, 'search'])->name('organization.index');
});

Route::get('/storage-link', function(){
    $storagePath = storage_path('app/public');
    $publicPath = public_path('storage');

    if (file_exists($publicPath)) {        
        return ['message' => 'The symlink already exists.'];
    }
    if (symlink($storagePath, $publicPath)) {
        return ['message' => 'Symlink created successfully.'];
    } else {
        echo "Failed to create the symlink.";
        return ['message' => 'Failed to create the symlink.'];
    }
});
Route::get('/storage-unlink', function(){
    $privatePath = storage_path('app/public');
    $publicPath = $_SERVER['DOCUMENT_ROOT'].'/storage';

    if (File::exists($publicPath)) {
        unlink($publicPath);
        return [ 'message' => 'Symlink unlinked successfully.'];
    } else {
        return [ 'message' => 'Storage Symlink does not exist.'];
    }
});
Route::post('/upload/organization-document', [UploadController::class, 'storeOrganizationDoc']);
Route::post('/upload/organization-logo', [UploadController::class, 'storeOrganizationLogo']);
Route::post('/upload/photo-id-front', [UploadController::class, 'storeInstructorPhotoFront']);
Route::post('/upload/photo-id-back', [UploadController::class, 'storeInstructorPhotoBack']);
Route::post('/upload/checkpoint-badge', [UploadController::class, 'storeCheckpointBadge']);
Route::post('/upload/checkpoint-certificate', [UploadController::class, 'storeCheckpointCertificate']);

Route::delete('/upload/organization-document', [UploadController::class, 'deleteOrganizationDoc']);
Route::delete('/upload/organization-logo', [UploadController::class, 'deleteOrganizationLogo']);
Route::delete('/upload/photo-id-front', [UploadController::class, 'deleteInstructorPhotoFront']);
Route::delete('/upload/photo-id-back', [UploadController::class, 'deleteInstructorPhotoBack']);
Route::delete('/upload/checkpoint-badge', [UploadController::class, 'deleteCheckpointBadge']);
Route::delete('/upload/checkpoint-certificate', [UploadController::class, 'deleteCheckpointCertificate']);

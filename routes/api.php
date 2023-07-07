<?php

use App\Http\Controllers\UploadController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/', function(Request $request){
    return ['name'=> 'Mohib Ali', 'age'=> 20, 'email'=> "dev.mohib@gmail.com"];
});

Route::post('/upload/organization-document', [UploadController::class, 'storeOrganizationDoc']);
Route::post('/upload/organization-logo', [UploadController::class, 'storeOrganizationLogo']);
Route::post('/upload/instructor-photo-id', [UploadController::class, 'storeInstructorPhotoId']);
Route::post('/upload/checkpoint-doc', [UploadController::class, 'storeCheckpointDoc']);

Route::delete('/upload/organization-document', [UploadController::class, 'deleteOrganizationDoc']);
Route::delete('/upload/organization-logo', [UploadController::class, 'deleteOrganizationLogo']);
Route::delete('/upload/instructor-photo-id', [UploadController::class, 'deleteInstructorPhotoId']);
Route::delete('/upload/checkpoint-doc', [UploadController::class, 'deleteCheckpointDoc']);

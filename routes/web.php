<?php

use App\Http\Controllers\Checkpoint\CheckpointController;
use App\Http\Controllers\Instructor\InstructorController;
use App\Http\Controllers\Organization\OrganizationController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Student\StudentController;
// use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/', function () {
    return Inertia::render('Landingpage/index', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'canOpenDashboard' => Route::has('dashboard'),
    ]);
});


Route::get('/app', function () {
    return Inertia::render('App/index');
})->middleware(['auth', 'verified'])->name('app');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard/index', ['page' => 'dashboard']);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::middleware('auth')->group(function(){
    Route::get('/instructor', [InstructorController::class, 'index'])->name('instructor.index');
    Route::get('/instructor/:id  ', [InstructorController::class, 'show'])->name('instructor.show');
});

Route::middleware('auth')->group(function(){
    Route::get('/student', [StudentController::class, 'index'])->name('student.index');
    Route::get('/student/:id  ', [StudentController::class, 'show'])->name('student.show');
});

Route::middleware('auth')->group(function(){
    Route::get('/organization', [OrganizationController::class, 'index'])->name('organization.index');
    Route::get('/organization/:id  ', [OrganizationController::class, 'show'])->name('organization.show');
});

Route::middleware('auth')->group(function(){
    Route::get('/checkpoint', [CheckpointController::class, 'index'])->name('checkpoint.index');
    Route::get('/checkpoint/:id  ', [CheckpointController::class, 'show'])->name('checkpoint.show');
});


require __DIR__.'/auth.php';

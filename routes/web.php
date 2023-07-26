<?php

use App\Http\Controllers\Checkpoint\CheckpointController;
use App\Http\Controllers\Instructor\InstructorController;
use App\Http\Controllers\Organization\OrganizationController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Student\StudentController;
use Illuminate\Support\Facades\Log;
// use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/', function () {
    return Inertia::render('Landingpage/index', [
        'canLogin' => Route::has('login'),
        // 'canRegister' => Route::has('register'),
        'canOpenDashboard' => Route::has('dashboard'),
    ]);
});

Route::get('/not-allowed', function(){
    return Inertia::render('NotAllowed/index');
})->name('not-allowed');

Route::get('/deactivated', function(){
    return Inertia::render('UserNotActive/index');
})->name('user-not-active');

Route::get('/app', function () {
    return Inertia::render('App/index');
})->middleware(['auth', 'verified'])->name('app');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard/index', ['activeMenu' => 'dashboard', 'title'=>'Dashboard', 'canAccess'=>true]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::middleware('auth')->group(function(){
    Route::get('/organization', [OrganizationController::class, 'index'])->name('organization.index');
    Route::delete('/organization/{id}', [OrganizationController::class, 'destroy'])->name('organization.destroy');
    Route::get('/organization/new', [OrganizationController::class, 'create'])->name('organization.create');
    Route::post('/organization/store', [OrganizationController::class, 'store'])->name('organization.store');
    Route::put('/organization/edit', [OrganizationController::class, 'update'])->name('organization.edit');
    Route::put('/organization/attachEntity', [OrganizationController::class, 'attachEntity'])->name('organization.attachEntity');
    Route::put('/organization/detachEntity', [OrganizationController::class, 'detachEntity'])->name('organization.detachEntity');
    Route::get('/organization/view/{id}', [OrganizationController::class, 'show'])->name('organization.show');
    Route::get('/organization/edit/{id}', [OrganizationController::class, 'showEdit'])->name('organization.showEdit');
});

Route::middleware('auth')->group(function(){
    Route::get('/instructor', [InstructorController::class, 'index'])->name('instructor.index');
    Route::get('/instructor/search', [InstructorController::class, 'search'])->name('instructor.search');
    Route::delete('/instructor/{id}', [InstructorController::class, 'destroy'])->name('instructor.destroy');
    Route::get('/instructor/new', [InstructorController::class, 'create'])->name('instructor.create');
    Route::post('/instructor/store', [InstructorController::class, 'store'])->name('instructor.store');
    Route::put('/instructor/edit', [InstructorController::class, 'update'])->name('instructor.edit');
    Route::put('/instructor/attachEntity', [InstructorController::class, 'attachEntity'])->name('instructor.attachEntity');
    Route::put('/instructor/detachEntity', [InstructorController::class, 'detachEntity'])->name('instructor.detachEntity');
    Route::get('/instructor/view/{id}', [InstructorController::class, 'show'])->name('instructor.show');
    Route::get('/instructor/edit/{id}', [InstructorController::class, 'showEdit'])->name('instructor.showEdit');
});

Route::middleware('auth')->group(function(){
    Route::get('/student', [StudentController::class, 'index'])->name('student.index');
    Route::get('/student/search', [StudentController::class, 'search'])->name('student.search');
    Route::delete('/student/{id}', [StudentController::class, 'destroy'])->name('student.destroy');
    Route::get('/student/new', [StudentController::class, 'create'])->name('student.create');
    Route::post('/student/store', [StudentController::class, 'store'])->name('student.store');
    Route::put('/student/edit', [StudentController::class, 'update'])->name('student.edit');
    Route::put('/student/attachEntity', [StudentController::class, 'attachEntity'])->name('student.attachEntity');
    Route::put('/student/detachEntity', [StudentController::class, 'detachEntity'])->name('student.detachEntity');
    Route::get('/student/view/{id}', [StudentController::class, 'show'])->name('student.show');
    Route::get('/student/edit/{id}', [StudentController::class, 'showEdit'])->name('student.showEdit');
});

Route::middleware('auth')->group(function(){
    Route::get('/checkpoint', [CheckpointController::class, 'index'])->name('checkpoint.index');
    Route::get('/checkpoint/search', [CheckpointController::class, 'search'])->name('checkpoint.search');
    Route::get('/checkpoint/view/{id}', [CheckpointController::class, 'show'])->name('checkpoint.show');
    Route::delete('/checkpoint/{id}', [CheckpointController::class, 'destroy'])->name('checkpoint.destroy');
    Route::get('/checkpoint/new', [CheckpointController::class, 'create'])->name('checkpoint.create');
    Route::post('/checkpoint/store', [CheckpointController::class, 'store'])->name('checkpoint.store');
    Route::put('/checkpoint/edit', [CheckpointController::class, 'update'])->name('checkpoint.edit');
    Route::put('/checkpoint/attachEntity', [CheckpointController::class, 'attachEntity'])->name('checkpoint.attachEntity');
    Route::put('/checkpoint/detachEntity', [CheckpointController::class, 'detachEntity'])->name('checkpoint.detachEntity');
    Route::get('/checkpoint/edit/{id}', [CheckpointController::class, 'showEdit'])->name('checkpoint.showEdit');
});

require __DIR__.'/auth.php';

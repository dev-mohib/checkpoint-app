<?php

namespace App\Http\Controllers;

use App\Models\Instructor;
use App\Models\Organization;
use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index(Request $request){
        $instructor = $this->get_instructor_data($request);
        return Inertia::render(
            'Dashboard/index', [
                'activeMenu' => 'dashboard', 'title'=>'Dashboard', 'canAccess'=>true,
                'instructor' => $this->get_instructor_data($request),
                'student'=> $this->get_student_data($request),
                'organization' => $this->get_organization_data($request)
            ]);
    }

    public function get_instructor_data(Request $request){
        $id = $request->user()->id;
        if($request->user()->role != 'instructor'){
            return null;
        }
        $instructor = Instructor::with(['users', 'organizations', 'organizations.users'])
        ->whereHas('users', function ($query) use ($id) {
            $query->where('id', $id);
        })->first();
        return $instructor;
    }

    public function get_student_data(Request $request){
        $id = $request->user()->id;
        if($request->user()->role != 'student'){
            return null;
        }
        $instructor = Student::with(['users', 'organizations', 'organizations.users'])
        ->whereHas('users', function ($query) use ($id) {
            $query->where('id', $id);
        })->first();
        return $instructor;
    }

    public function get_organization_data(Request $request){
        $id = $request->user()->id;
        if($request->user()->role != 'organization'){
            return null;
        }
        $instructor = Organization::with(['users'])
        ->whereHas('users', function ($query) use ($id) {
            $query->where('id', $id);
        })->first();
        return $instructor;
    }
}

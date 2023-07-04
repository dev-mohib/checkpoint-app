<?php

namespace App\Http\Controllers\Organization;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Organization;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Route;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Ramsey\Uuid\Uuid;

class OrganizationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return Inertia::render('Organization/index', ['title' => 'Organizations', 'activeMenu'=> 'organization']);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        return Inertia::render('Organization/create/index', ['title' => 'Create organization', 'activeMenu'=> 'organization']);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // $request->validate([
        //     'name' => 'required|string|max:255',
        //     'email' => 'required|string|email|max:255|unique:'.User::class,
        //     'password' => ['required', 'confirmed', Rules\Password::defaults()],
        //     'contact'=> 'requitrd',
        //     'username'=> 'required|string|max:30|unique:'.User::class,
        //     'address' => 'required|string|min:20'
        // ]);
        
        $userUid = Uuid::uuid4()->toString();
        $orgUid = Uuid::uuid4()->toString();
        $user = User::create([
            'id'=> $userUid,
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'address'=> $request->address,
            'contact'=> $request->contact,
            'username'=> $request->username,
            'type'=> 'organization',
        ]);

        event(new Registered($user));
        $organization = Organization::create([
            'id'=> $orgUid,
            'created_by'=> $request->user()->id,
            'user_id'=> $userUid,
            'name'=> $request->name,  
        ]);
        return redirect('/organization/view/'.$orgUid);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // if(!$id){
        // return Inertia::render('Organization/show/index',['organization' => $organization]);
        // }
        //
        $organization = DB::table('organizations')
        ->join('users', 'organizations.user_id','=','users.id')
        ->select('organizations.*', 'users.*', 'users.id as user_id')
        ->where('organizations.id', $id)
        ->get();
        
        if(count($organization)=== 0){
            return Inertia::render('Organization/show/index',['isEmpty'=> true, 'title'=> 'Organization', 'activeMenu'=>'organization']);
        }else {
            return Inertia::render('Organization/show/index',['organization' => $organization[0], 'isEmpty'=> false, 'title'=>'Organization','activeMenu'=>'organization']);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}

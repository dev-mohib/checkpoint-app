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
    public function index(Request $request)
    {
        //
        $name = $request->query('name')??'';
        $email = $request->query('email')??'';
        $id = $request->query('id')??'';
        $address = $request->query('address')??'';
        $username = $request->query('username')??'';
        $perPage = 5;
        $page = $request->query('page')??1;
        $organizations = DB::table('organizations')
        ->join('users', 'users.id', '=', 'organizations.user_id')
        ->select('organizations.id', 'organizations.name', 'users.email', 'users.username', 'users.address', 'organizations.logo', 'users.status')
        ->where('users.type', '=', 'organization')
        ->where('organizations.name', 'like', '%' . $name . '%')
        ->where('users.username', 'like', '%' . $username . '%')
        ->where('users.email', 'like', '%' . $email . '%')
        ->where('users.address', 'like', '%' . $address . '%')
        ->where('organizations.id', 'like', '%' . $id . '%')
        ->paginate($perPage, ['*'], 'page', $page);

        // $organizations = Organization::with('users')
        // ->where('users.type', '=', 'organization')
        // ->get();

        $total = $organizations->total();
        $from = ($page - 1) * $perPage + 1;
        $to = $from + $perPage - 1;
        $to = min($to, $total);
                
        return Inertia::render('Organization/index', ['title' => 'Organizations', 'activeMenu'=> 'organization', 'data'=>$organizations, 'from'=>$from, 'to'=>$to,'total'=>$total]);
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
        $organization = Organization::with(
            ['students','instructors', 'checkpoints','user', 'students.user' , 'instructors.user'])
        ->find($id);
        if(!$organization){
            return Inertia::render('Organization/show/index',['isEmpty'=> true, 'title'=> 'Organization', 'activeMenu'=>'organization']);
        }else {
            return Inertia::render('Organization/show/index',['organization' => $organization, 'isEmpty'=> false, 'title'=>'Organization','activeMenu'=>'organization']);
        }
    }
    public function showEdit(string $id)
    {   
        // $id = $request->query('id');
        $organization = Organization::with(['user'])
        ->find($id??'1234');
        if(!$organization){
            return Inertia::render('Organization/edit/index',['isEmpty'=> true, 'title'=> 'Edit Organization', 'activeMenu'=>'organization', 'isFound'=>false]);
        }else {
            return Inertia::render('Organization/edit/index',['organization' => $organization, 'isEmpty'=> false, 'title'=>'Organization','activeMenu'=>'organization', 'isFound'=>true]);
        }
    }

    public function update(Request $request)
    {
        $form = $request->all();
        $org = Organization::with('user')
        ->find($form['id']);

        $org->name = $form['name'];
        $org->save();

        $user = $org->user;
        $user->contact_number = $form['contact_number'];
        if($form['password'])
            $user->password = $form['password'];
        $user->email = $form['email'];
        $user->address = $form['address'];
        $user->username = $form['username'];

        $user->save();

        
        // $email = $request->form
        if(true){
            return Redirect::route('organization.show',['id'=>$form['id']]);
        }else {
            // return Inertia::render('Organization/edit/index',['organization' => $update, 'isSuccess'=> true, 'title'=>'Organization','activeMenu'=>'organization']);
            return Redirect::route('organization.show',['id'=>$form['id']]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}

<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Checkpoint;
use App\Models\Instructor;
use App\Models\Organization;
use App\Models\OrganizationInstructor;
use App\Models\OrganizationStudent;
use App\Models\Student;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Log;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        

        User::factory()->count(30)->create();
        Organization::factory()->count(10)->create();
        Instructor::factory()->count(10)->create();
        Student::factory()->count(10)->create();
        Checkpoint::factory()->count(20)->create();
        OrganizationInstructor::factory(10)->create();
        OrganizationStudent::factory(10)->create();
        User::factory()->create([
            'id'=>'111',
            'name'=> 'Mohib Ali',
            'username'=> 'dev.mohib',
            'email'=> 'dev.mohib@gmail.com',
            'type'=> 'admin',
            'address'=> 'Lahore, Pakistan',
            'password'=> '$2y$10$KlLiaPQcPkSCFY4tBdSIaOIts5awS0l2XQBhyywqmWKlfFyAqQWPe'
        ]);

        // foreach(Organization::all() as $oragnization){
        //     $instructors = Instructor::all()->take(rand(1,5))->pluck('id');
        //     // $students = Instructor::all()->take(rand(1,5))->pluck('id');
        //     // $oragnization->users()->attach($instructors);
        //     Log::info($oragnization);
        //     Log::info($instructors);
        //     // $oragnization->instructors()->attach
        //     // $oragnization->users()->attach($students);
        // }

        // $this->call(UserSeeder::class);
        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        //     'password'=>'password'
        // ]);
    }

}

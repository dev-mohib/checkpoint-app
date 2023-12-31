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
use App\Models\InstuctorStudent;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Log;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::factory()->count(30)->create();
        Organization::factory()->count(10)->create();
        Instructor::factory()->count(10)->create();
        Student::factory()->count(10)->create();
        Checkpoint::factory()->count(35)->create();
        OrganizationInstructor::factory()->count(10)->create();
        InstuctorStudent::factory()->count(10)->create();
        OrganizationStudent::factory()->count(10)->create();
        User::factory()->create([
            'id'=>'100',
            'name'=> 'Mohib Ali',
            'username'=> 'dev.mohib',
            'email'=> 'dev.mohib@gmail.com',
            'role'=> 'admin',
            'address'=> 'Lahore, Pakistan',
            'password'=> '$2y$10$KlLiaPQcPkSCFY4tBdSIaOIts5awS0l2XQBhyywqmWKlfFyAqQWPe'
        ]);
    }

}

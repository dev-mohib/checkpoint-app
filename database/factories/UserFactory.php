<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;


class UserFactory extends Factory
{
    protected $model = User::class;
    public $count = 0;
    public function definition(): array
    {
        // $2y$10$KlLiaPQcPkSCFY4tBdSIaOIts5awS0l2XQBhyywqmWKlfFyAqQWPe
        $dob = array(
            '2011-01-10',
            '2012-04-20',
            '2014-03-15',
            '2009-02-20',
            '2008-05-21',
            '2007-06-25',
            '2015-07-10',
            '2006-04-05',
            '2014-06-03',
            '2013-09-06',
            '2010-02-27',
            '2007-03-21',
            '2008-04-24',
            '2012-08-09',
        );
        $gender = array('Male', 'Female');
        $this->count += 1;
        if($this->count < 41){
            $role = 'organization';
        }else if($this->count < 51 && $this->count > 40){
            $role = 'instructor';
        }else{
            $role = 'student';
        }
        return [
            'name' => fake()->name(),
            'username' => fake()->userName(),
            'email' => fake()->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password' => '$2y$10$KlLiaPQcPkSCFY4tBdSIaOIts5awS0l2XQBhyywqmWKlfFyAqQWPe', // password
            'address' => fake()->secondaryAddress().', '. fake()->city(),
            'contact_number' => fake()->e164PhoneNumber(),
            'remember_token' => Str::random(10),
            'role'=> $role,
            'date_of_birth' => $dob[array_rand($dob)],
            'gender'=> $gender[array_rand($gender)]
        ];
    }
    public function get_count($count){
        
    }
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}

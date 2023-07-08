<?php

namespace Database\Factories;

use App\Models\Student;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Student>
 */
class StudentFactory extends Factory
{
    protected $model = Student::class;
    protected $id = 21;
    public function definition(): array
    {
        return [
            //
            'parent_name'=>fake()->name(),
            'parent_relationship'=> 'Son',
            'users_id'=>$this->id++,
        ];
    }
}

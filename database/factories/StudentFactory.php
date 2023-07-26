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
        $relationships = [
           'Parents',
           'Grandfather',
           'Brother',
           'Sister',
           'Uncle',
           'Grandmother',
           'Other'
        ];
        return [
            //
            'guardian_name'=>fake()->name(),
            'guardian_relationship'=> $relationships[array_rand($relationships)],
            'user_id'=>$this->id++,
        ];
    }
}

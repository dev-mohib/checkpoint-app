<?php

namespace Database\Factories;

use App\Models\Instructor;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Instructor>
 */
class InstructorFactory extends Factory
{
    protected $model = Instructor::class;
    protected $id = 11;
    public function definition(): array
    {
        $qualifications = array(
            'MSc Computer Science',
            'MBBS',
            'Phd Physics',
            'MSc Electrical Engineering',
            'MBA',
            'MSc Data Science',
            'MSc Biotechnology',
            'MSc Quatum Physics',
            'Doctor of Physiotherapy',
            'Doctor of Psychology',
            'MSc Fine Arts',
        );
        $k = array_rand($qualifications);
        $v = $qualifications[$k];
        return [
            'qualification'=> $v,
            'user_id'=> $this->id++,
        ];
    }
}

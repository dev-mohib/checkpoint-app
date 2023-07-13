<?php

namespace Database\Factories;

use App\Models\Checkpoint;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Checkpoint>
 */
class CheckpointFactory extends Factory
{
    protected $model = Checkpoint::class;

    public function definition(): array
    {
        $subjects = array(
            'ObjectOrientedProgramming',
            'Data Structure',
            'Artificial Intelligence',
            'Entrepreneurship',
            'Technical and Report Writing',
            'Programming Fundamentals',
            'Software Engineering',
            'Web Development',
            'Mobile Application Development',
            'Cloud Computing',
            'Financial Accounting',
            'Introduction to psychology',
            'DevOps',
            'Database Management',
            'Information Technology',
            'Telecommunications',
            'Computer Networks',
            'Operating Systems',
            'Human Computer Interaction',
            'Principles of UI & UX',
            'Backend Development',
            'Visual Programming',
            'Blockchain Development',
            'Soft Skills',
            'Data Warehousing and Mining'
        );
        $period = array('1 Year', '2 Years', '3 Years', 'Permanent');
        $k = array_rand($subjects);
        $v = $subjects[$k];
        return [
            //
            'name'=>$v,
            'description' => fake()->realText($maxNbChars = 50, $indexSize = 2),
            'instructor_input' => fake()->realText($maxNbChars = 60, $indexSize = 2),
            'organization_id' => rand(1,10),
            'instructor_id' => rand(1,10),
            'student_id' => rand(1,10),
            'validity_period' => $period[array_rand($period)],
            'achieved_gradepoints' => rand(60, 95),
            'total_gradepoints' => 100
        ];
    }
}

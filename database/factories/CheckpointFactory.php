<?php

namespace Database\Factories;

use App\Models\Checkpoint;
use Illuminate\Database\Eloquent\Factories\Factory;

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
            'Data Warehousing and Mining',
            'Introduction to Computer Programming',
            'Digital Illustration Techniques',
            'Human-Computer Interaction',
            'Introduction to Art History',
            'Graphic Design Principles',
            'Web Development Fundamentals',
            'Modern Sculpture and Installations',
            'Data Visualization and Analysis',
            'Introduction to Painting Techniques',
            'User Experience Design',
            'Principles of Animation',
            'Database Management Systems',
            'Contemporary Photography',
            'Typography and Layout Design',
            'Machine Learning',
            'Introduction to Film Studies',
            'Mobile App Development',
            'Fashion Design and Illustration',
            'Game Design and Development',
            'Creative Writing and Storytelling'
        );
        $period = array('1 Year', '2 Years', '3 Years', 'Permanent');
        $type = array('General', 'Completion', 'Grade Based');
        $k = array_rand($subjects);
        $v = $subjects[$k];
        $ogs_id = array(null, rand(1,10), null, rand(1,10), rand(1,10), rand(1,10));
        return [
            'name'=>$v,
            'description' => fake()->realText($maxNbChars = 50, $indexSize = 2),
            'instructor_input' => fake()->realText($maxNbChars = 60, $indexSize = 2),
            'organization_id' => $ogs_id[array_rand($ogs_id)],
            'instructor_id' => rand(1,10),
            'student_id' => rand(1,10),
            'validity_period' => $period[array_rand($period)],
            'type' => $type[array_rand($type)],
            'achieved_gradepoints' => rand(60, 95),
            'total_gradepoints' => 100,
            'images' => json_encode(['1.jpg', '2.jpg', '3.jpg'])
        ];
    }
}

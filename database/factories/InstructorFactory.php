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
        $pastDate = array(
            '2020-01-10',
            '2021-04-20',
            '2022-03-15',
            '2019-02-20',
            '2018-05-21',
            '2017-06-25',
            '2022-07-10',
            '2021-04-05',
            '2020-06-03',
            '2018-09-06',
            '2019-02-27',
            '2017-03-21',
            '2018-04-24',
            '2020-08-09',
        );
        $futureDate = array(
            '2024-01-10',
            '2024-04-20',
            '2025-03-15',
            '2024-02-20',
            '2027-05-21',
            '2025-06-25',
            '2024-07-10',
            '2025-04-05',
            '2026-06-03',
            '2024-09-06',
            '2024-02-27',
            '2025-03-21',
            '2026-04-24',
            '2025-08-09',
        );
        $k = array_rand($qualifications);
        $v = $qualifications[$k];
        return [
            'qualification'=> $v,
            'user_id'=> $this->id++,
            // 'photo_id_front'=>'default.jpg',
            // 'photo_id_back'=>'default.jpg',
            'access_validity_start'=> $pastDate[array_rand($pastDate)],
            'access_validity_end' => $futureDate[array_rand($futureDate)]
        ];
    }
}

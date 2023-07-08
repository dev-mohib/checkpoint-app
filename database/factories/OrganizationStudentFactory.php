<?php
namespace Database\Factories;
use Illuminate\Database\Eloquent\Factories\Factory;

class OrganizationStudentFactory extends Factory
{

    public function definition(): array
    {
        return [
            'organization_id'=>rand(1,10),
            'student_id'=>rand(1,10)
        ];
    }
}

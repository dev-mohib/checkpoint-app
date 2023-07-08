<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class OrganizationInstructorFactory extends Factory
{
    public function definition(): array
    {
        return [
            //
            'organization_id'=>rand(1,10),
            'instructor_id'=>rand(1,10)
        ];
    }
}

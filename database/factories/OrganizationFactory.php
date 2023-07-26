<?php

namespace Database\Factories;

use App\Models\Organization;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Organization>
 */
class OrganizationFactory extends Factory
{
    protected $model = Organization::class;
    protected $id = 1;
    public function definition(): array
    {
        return [
            //
            'name'=> fake()->company(),
            'logo'=>'/default.png',
            'user_id'=>$this->id++
        ];
    }
}

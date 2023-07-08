<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrganizationInstructor extends Model
{
    use HasFactory;
    protected $table = 'organization_instructor';

    protected $fillable = [
        'id',
        'organization_id',
        'instructor_id'
    ];
}

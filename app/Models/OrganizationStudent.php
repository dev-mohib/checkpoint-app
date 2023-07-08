<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrganizationStudent extends Model
{
    use HasFactory;
    protected $table = 'organization_student';

    protected $fillable = [
        'id',
        'organization_id',
        'student_id'
    ];
}

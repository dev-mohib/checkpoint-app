<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class InstuctorStudent extends Model
{
    use HasFactory; 
    protected $table = 'instructor_student';

    protected $fillable = [
        'id',
        'instructor_id',
        'student_id',
    ];
}

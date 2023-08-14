<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Checkpoint extends Model
{
    use HasFactory;
    // protected $keyType = 'string';
    protected $table = 'checkpoints';
    protected $casts = ['images' => 'array'];
    protected $fillable = [
        'id',
        'name',
        'description',
        'instructor_input',
        'instructor_recommendation',
        'organization_id',
        'instructor_id',
        'student_id',
        'validity_period',
        'type',
        'achieved_gradepoints',
        'total_gradepoints',
        'images'
    ];
    public function organizations()
    {
        return $this->belongsTo(Organization::class, 'organization_id', 'id');
    }

    public function instructors()
    {
        return $this->belongsTo(Instructor::class, 'instructor_id', 'id');
    }


    public function students()
    {
        return $this->belongsTo(Student::class, 'student_id', 'id');
    }
}

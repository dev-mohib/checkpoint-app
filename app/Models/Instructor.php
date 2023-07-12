<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Instructor extends Model
{
    use HasFactory;
    // protected $keyType = 'string';
    protected $table = 'instructors';

    public function organizations()
    {
        return $this->belongsToMany(Organization::class, 'organization_instructor', 'instructor_id', 'organization_id');
    }
    public function students()
    {
        return $this->belongsToMany(Student::class, 'instructor_student', 'student_id', 'instructor_id');
    }
    public function checkpoints()
    {
        return $this->hasMany(Checkpoint::class);
    }
    public function users()
    {
        return $this->belongsTo(User::class);
    }
}

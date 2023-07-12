<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;
    // protected $keyType = 'string';
    protected $table = 'students';

    public function organizations()
    {
        return $this->belongsToMany(Organization::class);
    }
    public function checkpoints()
    {
        return $this->hasMany(Checkpoint::class);
    }
    public function instructors()
    {
        return $this->belongsToMany(Instructor::class, 'instructor_student', 'instructor_id', 'student_id');
    }
    public function users()
    {
        return $this->belongsTo(User::class);
    }
}

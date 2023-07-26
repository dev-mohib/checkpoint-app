<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Organization extends Model
{

    use HasFactory;
    protected $table = 'organizations';
    // protected $keyType = 'string';

    protected $fillable = [
        'id',
        'created_by',
        'user_id',
        'name',
        'registration_doc',
        'logo'
    ];
    public function instructors()
    {
        return $this->belongsToMany(Instructor::class, 'organization_instructor', 'organization_id', 'instructor_id');
    }

    public function students()
    {
        return $this->belongsToMany(Student::class, 'organization_student', 'organization_id', 'student_id');
    }

    public function checkpoints()
    {
        return $this->hasMany(Checkpoint::class,'organization_id');
    }

    public function users()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}

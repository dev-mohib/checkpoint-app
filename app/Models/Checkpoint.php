<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Checkpoint extends Model
{
    use HasFactory;
    // protected $keyType = 'string';
    protected $table = 'checkpoints';

    public function organizations()
    {
        return $this->belongsTo(Organization::class, 'organization_id');
    }

    public function instructors()
    {
        return $this->belongsTo(Organization::class, 'instructor_id');
    }


    public function students()
    {
        return $this->belongsTo(Organization::class, 'student_id');
    }
}

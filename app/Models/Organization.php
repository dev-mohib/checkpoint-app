<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Organization extends Model
{

    use HasFactory;
    protected $fillable = [
        // other existing fields
        'id',
        'created_by',
        'user_id',
        'name'
    ];
    public function instructors()
    {
        return $this->hasMany(Instructor::class, 'created_by', 'id');
    }

    public function students()
    {
        return $this->hasMany(Student::class, 'created_by', 'id');
    }

    public function checkpoints()
    {
        return $this->hasMany(Checkpoint::class, 'created_by', 'id');
    }

    public function user()
    {
        return $this->belongsTo(User::class,'user_id');
    }
}

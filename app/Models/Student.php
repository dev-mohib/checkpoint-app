<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;
    // protected $keyType = 'string';

    protected $fillable = [
        'id',
        'user_id',
        'created_by',
        'organization_id',
        'guardian_name',
        'guardian_relationship'
    ];

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
        return $this->belongsToMany(Instructor::class);
    }
    public function users()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}

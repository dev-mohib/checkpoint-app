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
    public function users()
    {
        return $this->belongsTo(User::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use HasFactory;
    protected $keyType = 'string';

    public function organization()
    {
        return $this->belongsToMany(Organization::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class,'user_id');
    }
}

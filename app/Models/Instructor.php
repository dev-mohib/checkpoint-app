<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Instructor extends Model
{
    use HasFactory;
    public function organization()
    {
        return $this->belongsTo(Organization::class,'id', 'created_by');
    }
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}

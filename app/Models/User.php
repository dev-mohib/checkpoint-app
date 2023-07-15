<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;
    // protected $keyType = 'string';
    protected $table = 'users';

    protected $fillable = [
        'name',
        'email',
        'password',
        'id',
        'role',
        'address',
        'username'
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function organizations()
    {
        return $this->belongsTo(Organization::class, 'user_id');
    }

    public function instructors()
    {
        return $this->belongsTo(Instructor::class, 'user_id');
    }

    public function students()
    {
        return $this->belongsTo(Student::class,'user_id');
    }
}

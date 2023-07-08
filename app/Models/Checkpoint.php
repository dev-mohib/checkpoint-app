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
}

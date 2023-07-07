<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Checkpoint extends Model
{
    use HasFactory;
    protected $keyType = 'string';

    public function organization()
    {
        return $this->belongsTo(Organization::class,'org_id');
    }
}

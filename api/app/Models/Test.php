<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Test extends Model
{
    public $fillable = [
        'stat',
        'created_at',
        'updated_at',
    ];
}

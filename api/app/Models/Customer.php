<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    public $fillable = [
        'name',
        'email',
        'password',
        'address',
        'city',
        'phone',
        'created_at',
        'updated_at',
    ];

    /** @var string */

    protected $table = 'Customer';
}

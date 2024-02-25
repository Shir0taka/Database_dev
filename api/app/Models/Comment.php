<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    public $fillable = [
        'title',
        'description',
        'status',
        'image',
        'rate',
        'created_at',
        'updated_at',
        'Customer_id',
        'Order_id',
    ];

    /** @var string */

    protected $table = 'Comment';
}

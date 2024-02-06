<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'cover', 'author', 'rating', 'synopsis', 'value', 'number_of_pages', 'weight', 'edition', 'genre', 'stock_quantity', 'ISBN', 'format', 'language', 'add_info', 'archived'];
}

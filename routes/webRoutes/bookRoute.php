<?php

use App\Http\Controllers\BookController;
use Illuminate\Support\Facades\Route;

Route::prefix('book')
    ->controller(BookController::class)
    ->middleware('auth')
    ->group(function () {

        Route::get('', 'index')->name('book_index');
        Route::get('create', 'create')->name('book_create');

    });

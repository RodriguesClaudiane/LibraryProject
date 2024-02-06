<?php
use App\Http\Controllers\BookController;
use Illuminate\Support\Facades\Route;

Route::prefix('book')

    ->controller(BookController::class)
    ->middleware('auth')
    ->group(function () {

        Route::get('', 'index')
            ->name('book_index');
        Route::get('create', 'create')
            ->name('book_create');
        Route::post('','store')
            ->name('book_store');
        Route::get('{book}', 'show')
            ->name('book_show');
        Route::get('edit/{book}', 'edit')
            ->name('book_edit');
        Route::put('{book}', 'update')
            ->name('book_update');
        Route::delete('{book}', 'destroy')
            ->name('book_delete');

        Route::get('archived', 'index_archived')
            ->name('book_index_archived');
        Route::put('archived/{book}', 'update_archived_book')
            ->name('book_update_archived');

    });




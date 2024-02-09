<?php
use App\Http\Controllers\BookController;
use App\Models\Book;
use Illuminate\Support\Facades\Route;

Route::prefix('book')
    ->controller(BookController::class)
    ->middleware('auth')
    ->whereNumber('book')
    ->group(function () {


        Route::get('', 'index')
            ->name('book_index');

        Route::get('create', 'create')
            ->name('book_create')
            ->can('create',Book::class);

        Route::post('','store')
            ->name('book_store')
            ->can('create',Book::class);

        Route::get('{book}', 'show')
            ->name('book_show');

        Route::get('edit/{book}', 'edit')
            ->name('book_edit')
            ->can('update',Book::class);

        Route::put('{book}', 'update')
            ->name('book_update')
            ->can('update',Book::class);

        Route::delete('{book}', 'destroy')
            ->name('book_delete')
            ->can('delete', Book::class);

        Route::get('archived', 'index_archived')
            ->name('book_index_archived')
            ->can('archived', Book::class);

        Route::put('archived/{book}', 'update_archived_book')
            ->name('book_update_archived')
            ->can('archived', Book::class);

    });




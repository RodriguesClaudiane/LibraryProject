<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBookRequest;
use App\Http\Requests\UpdateBookRequest;
use App\Models\Book;
use Inertia\Inertia;

class BookController extends Controller
{
    public function index()
    {
        $paginate = Book::select('id','title', 'cover', 'author', 'ratings', 'format', 'value')->where('archived', '=', 0)->paginate(28);
        return Inertia::render('Book/Book', [
            'paginate' => $paginate
        ]);
    }

    public function create()
    {
        return Inertia::render('Book/BookCreate');
    }

    public function store(StoreBookRequest $request)
    {
        $validation = $request->validated();

        $file = $validation['cover'];
        $path = $file->store('book', 'public');
        $validation['cover'] = '/storage/' . $path;

        Book::create($validation);

        return to_route('book_index');
    }


    public function show(Book $book)
    {
        return Inertia::render('Book/BookShow', [
            'book' => $book
        ]);
    }


    public function edit(Book $book)
    {
        return Inertia::render('Book/BookEdit', [
            'book' => $book
        ]);
    }


    public function update(UpdateBookRequest $request, Book $book)
    {
        $validation = $request->validated();

        if($request->file('cover')) {
            $file = $request->file('cover');
            $path = $file->store('book', 'public');
            $validation['cover'] = '/storage/' . $path;
        } else {
            $validation['cover'] = $book['cover'];
        }

        $book->update($validation);
        return back();
    }


    public function destroy(Book $book)
    {
        $book->delete();
        return to_route('book_index');
    }

    public function index_archived()
    {
        $paginate = Book::select('id','title', 'cover', 'author', 'ratings', 'format', 'value')->where('archived', '=', 1)->paginate(28);
        return Inertia::render('Book/BookArchived', [
            'paginate' => $paginate
        ]);
    }
    public function update_archived_book(Book $book)
    {
        $book->update([
            'archived' => $book['archived'] === 1 ? 0 : 1
        ]);
        return back();
    }

}

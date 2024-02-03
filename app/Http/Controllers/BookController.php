<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreBookRequest;
use App\Http\Requests\UpdateBookRequest;
use App\Models\Book;
use Inertia\Inertia;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $paginate = Book::select('id','title', 'cover', 'author', 'ratings', 'format', 'value')->paginate(28);
        return Inertia::render('Book/Book', [
            'paginate' => $paginate
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Book/BookCreate');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreBookRequest $request)
    {
        $validation = $request->validated();

        $file = $validation['cover'];
        $path = $file->store('book', 'public');
        $validation['cover'] = '/storage/' . $path;

        Book::create($validation);

        return to_route('book_index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Book $book)
    {
        return Inertia::render('Book/BookShow', [
            'book' => $book
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Book $book)
    {
        $this->authorize('update', $book);
        return Inertia::render('Book/BookEdit', [
            'book' => $book
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBookRequest $request, Book $book)
    {
        $this->authorize('update', $book);
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

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Book $book)
    {
        //
    }
}

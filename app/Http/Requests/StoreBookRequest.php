<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBookRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => ['required', 'string'],
            'cover' => ['required', 'file', 'image'],
            'author' => ['required', 'string'],
            'synopsis' => ['required', 'string'],
            'value' => ['required', 'numeric', "regex:/^\d+(\.\d{1,2})?$/"],
            'number_of_pages' => ['required', 'integer'],
            'weight' => ['required', 'numeric', "regex:/^\d+(\.\d{1,2})?$/"],
            'edition' => ['required', 'string'],
            'genre' => ['required', 'string'],
            'stock_quantity' => ['required', 'integer'],
            'ISBN' => ['required', 'string'],
            'format' => ['required', 'string'],
            'language' => ['required', 'string'],
            'add_info' => ['nullable', 'string'],
        ];
    }
}

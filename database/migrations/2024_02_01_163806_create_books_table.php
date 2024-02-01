<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('cover');
            $table->string('author');
            $table->float('ratings',5)->default(0);
            $table->longText('synopsis');
            $table->float('value');
            $table->integer('number_of_pages');
            $table->float('weight');
            $table->string('edition');
            $table->string('genre');
            $table->integer('stock_quantity');
            $table->string('ISBN');
            $table->string('format'); //Edição em brochura, capa dura...
            $table->string('language');
            $table->longText('add_info')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};

<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Guilherme Valença',
            'email' => 'gui@gmail.com',
            'email_verified_at' => now(),
            'password' => 'library123',
            'role' => 'adm',
            'remember_token' => Str::random(10),
        ]);
        User::factory()->create([
            'name' => 'Claudiane Rodrigues',
            'email' => 'cra@gmail.com',
            'email_verified_at' => now(),
            'password' => 'library123',
            'role' => 'adm',
            'remember_token' => Str::random(10),
        ]);
        User::factory()->create([
            'name' => 'usuário comum 1',
            'email' => 'common1@gmail.com',
            'email_verified_at' => now(),
            'password' => 'library123',
            'role' => 'common',
            'remember_token' => Str::random(10),
        ]);
        User::factory()->create([
            'name' => 'usuário comum 2',
            'email' => 'common2@gmail.com',
            'email_verified_at' => now(),
            'password' => 'library123',
            'role' => 'common',
            'remember_token' => Str::random(10),
        ]);
    }
}

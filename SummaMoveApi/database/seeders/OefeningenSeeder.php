<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class OefeningenSeeder extends Seeder
{
    public function run(): void
{
    DB::table('Oefeningens')->insert([
        'naam_NL' => Str::random(10),
        'naam_EN' => Str::random(10),
        'omschrijving_NL' => Str::random(10),
        'omschrijving_EN' => Str::random(10),
    ]);
}
}

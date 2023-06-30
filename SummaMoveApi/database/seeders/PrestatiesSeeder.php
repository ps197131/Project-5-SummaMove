<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class PrestatiesSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('Prestaties')->insert([
            [
                'aantal' => rand(1, 100),
                'datum' => '2023-06-22',
                'van' => null,
                'tot' => null,
                'user_id' => 1,
                'oefeningen_id' => 1
            ],
            [
                'aantal' => rand(1, 100),
                'datum' => '2023-06-23',
                'van' => null,
                'tot' => null,
                'user_id' => 2,
                'oefeningen_id' => 2
            ]
        ]);
    }
}

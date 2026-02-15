<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class ProcessImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $now = Carbon::now();

        $processes = [
            [
                'imgurl' => 'storage/process/01-raw-harvest.webp',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'imgurl' => 'storage/process/02-hand-selection.webp',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'imgurl' => 'storage/process/03-cold-press-extraction.webp',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'imgurl' => 'storage/process/04-lab-formulation.webp',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'imgurl' => 'storage/process/05-texture-reveal.webp',
                'created_at' => $now,
                'updated_at' => $now,
            ],
        ];

        DB::table('process_images')->insert($processes);
    }
}

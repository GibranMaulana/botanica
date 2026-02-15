<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class ModelImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $now = Carbon::now();

        $ritualImages = [
            [
                'imgurl' => 'storage/ritual/01-model-pause.webp',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'imgurl' => 'storage/ritual/02-model-texture-touch.webp',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'imgurl' => 'storage/ritual/03-model-application.webp',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                'imgurl' => 'storage/ritual/04-model-absorption.webp',
                'created_at' => $now,
                'updated_at' => $now,
            ],
            [
                // 5. The Glow: Radiant skin, looking serene/confident
                'imgurl' => 'storage/ritual/05-model-glow-result.webp',
                'created_at' => $now,
                'updated_at' => $now,
            ],
        ];

        DB::table('model_images')->insert($ritualImages);
    }
}

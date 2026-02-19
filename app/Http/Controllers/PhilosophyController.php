<?php

namespace App\Http\Controllers;

use App\Models\ProcessImage;

class PhilosophyController extends Controller
{
    public function index()
    {
        $processAssets =  ProcessImage::pluck('imgurl');

        return view('philosophy', [
           'processAssets' => $processAssets,
        ]);
    }
}

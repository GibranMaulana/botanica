<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ModelImage;
use App\Models\ProcessImage;
use Illuminate\View\View;

class SanctuaryController extends Controller
{
    public function index(): View
    {
        $products = Product::with(['images', 'variants'])
            ->where('is_featured', true)
            ->take(2)
            ->get();

        $rituals = ModelImage::get();
        $processes = ProcessImage::get();

        return view('sanctuary', [
            'products' => $products,
            'rituals' => $rituals,
            'processes' => $processes,
        ]);
    }
}

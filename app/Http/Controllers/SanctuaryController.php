<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\View\View;

class SanctuaryController extends Controller
{
   public function index(): View
   {
      $products = Product::with(['images', 'variants'])
                  ->where('is_featured', true)
                  ->take(2)
                  ->get();
      
      return view('sanctuary', [
         'products' => $products
      ]);
   }
}

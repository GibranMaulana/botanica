<?php

namespace App\Http\Controllers;

use App\Models\Product;

class CollectionController extends Controller
{
    public function index()
    {

        $productsData = Product::with(['images', 'variants'])->get();

        $products = $productsData->map(function ($p) {

            $maxPrice = $p->variants->max('price');
            $minPrice = $p->variants->min('price');

            $displayPrice = $maxPrice == $minPrice
            ? '$'.$maxPrice
            : '$'.$minPrice.' ~ $'.$maxPrice;

            $imgUrl = 'storage/'.($p->images->first() ? $p->images->first()->path : 'products/placeholder.jpg');

            return [
                'id' => $p->id,
                'name' => $p->name,
                'description' => $p->description,
                'img_url' => $imgUrl,
                'display_price' => $displayPrice,
                'variants_size_display' => $p->variants->pluck('size')->join(', '),

                'variants' => $p->variants->map(fn ($v) => [
                    'id' => $v->id,
                    'sku' => $v->sku,
                    'size' => $v->size,
                    'price' => '$'.$v->price,
                ]),
            ];
        });

        return view('collection', [
            'products' => $products,
        ]);
    }
}

<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Product;
use App\Models\ProductVariant;
use App\Models\ProductImage;
use Illuminate\Support\Str;

class ProductSeeder extends Seeder
{
    public function run()
    {
        $products = [

            [
               'name' => 'Hinoki & Ash Candle',
               'description' => 'A soy-wax blend hand-poured in our signature ceramic vessel. Notes of Japanese cypress, charred wood, and vetiver.',
               'is_featured' => true, 
               'variants' => [
                  ['size' => '200g', 'price' => 55.00, 'stock' => 40, 'sku' => 'HOME-HIN-200'],
                  ['size' => '400g', 'price' => 85.00, 'stock' => 20, 'sku' => 'HOME-HIN-400'],
               ],
               'image' => 'products/candle-hinoki.webp'
            ],
            [
                'name' => 'Midnight Recovery Serum',
                'description' => 'A potent restorative treatment that works overnight to repair skin barrier function. Rich in antioxidants and botanical extracts.',
                'is_featured' => true,
                'variants' => [
                    ['size' => '30ml', 'price' => 45.00, 'stock' => 100, 'sku' => 'MRS-30'],
                    ['size' => '50ml', 'price' => 75.00, 'stock' => 50, 'sku' => 'MRS-50'],
                ],
                'image' => 'products/serum-midnight.webp'
            ],
            [
                'name' => 'Velvet Moss Cleanser',
                'description' => 'A gentle, pH-balanced cleanser derived from sea moss and green tea. Removes impurities without stripping natural oils.',
                'is_featured' => true,
                'variants' => [
                    ['size' => '150ml', 'price' => 28.00, 'stock' => 200, 'sku' => 'VMC-150'],
                    ['size' => 'Refill', 'price' => 22.00, 'stock' => 50, 'sku' => 'VMC-REF'],
                ],
                'image' => 'products/cleanser-moss.webp'
            ],
            [
                'name' => 'Botanica Pure Oil',
                'description' => '100% cold-pressed jojoba and rosehip oil. The ultimate hydration lock for all skin types.',
                'is_featured' => false, // This one won't show on the homepage
                'variants' => [
                    ['size' => '50ml', 'price' => 35.00, 'stock' => 80, 'sku' => 'BPO-50'],
                ],
                'image' => 'products/oil-pure.webp'
            ],
            [
                'name' => 'Jade Sculpting Gua Sha',
                'description' => 'Hand-carved nephrite jade tool for facial massage. Promotes lymphatic drainage and enhances product absorption.',
                'is_featured' => false,
                'variants' => [
                    ['size' => 'One Size', 'price' => 32.00, 'stock' => 150, 'sku' => 'TOOL-GUA-01'],
                ],
                'image' => 'products/tool-guasha.webp'
            ],
            
            [
                'name' => 'Glacial Clay Detox Mask',
                'description' => 'Sourced from the manicouagan crater. A negatively charged clay that acts as a magnet for toxins and heavy metals.',
                'is_featured' => false,
                'variants' => [
                    ['size' => '100ml', 'price' => 48.00, 'stock' => 60, 'sku' => 'MSK-CLAY-100'],
                ],
                'image' => 'products/mask-clay.webp'
            ],
            [
                'name' => 'Rose Water Hydration Mist',
                'description' => 'Distilled from Damask roses. Instantly refreshes and balances skin pH. Can be used as a toner or setting spray.',
                'is_featured' => false,
                'variants' => [
                    ['size' => '100ml', 'price' => 24.00, 'stock' => 300, 'sku' => 'MST-ROSE-100'],
                    ['size' => 'Refill', 'price' => 18.00, 'stock' => 100, 'sku' => 'MST-ROSE-REF'],
                ],
                'image' => 'products/mist-rose.webp'
            ],
            [
                'name' => 'Stem Cell Regeneration Cream',
                'description' => 'Our most advanced formula. Swiss apple stem cells and peptides work synergistically to reverse signs of aging.',
                'is_featured' => true,
                'variants' => [
                    ['size' => '50ml', 'price' => 125.00, 'stock' => 25, 'sku' => 'CRM-STEM-50'],
                ],
                'image' => 'products/cream-stem.webp'
            ],
        ];

        foreach ($products as $data) {
            $product = Product::create([
                'name' => $data['name'],
                'slug' => Str::slug($data['name']), 
                'description' => $data['description'],
                'is_featured' => $data['is_featured'],
            ]);

            foreach ($data['variants'] as $variant) {
                ProductVariant::create([
                    'product_id' => $product->id,
                    'size' => $variant['size'],
                    'price' => $variant['price'],
                    'stock' => $variant['stock'],
                    'sku' => $variant['sku'],
                ]);
            }

            ProductImage::create([
                'product_id' => $product->id,
                'path' => $data['image'],
                'is_primary' => true,
                'sort_order' => 0
            ]);
        }
    }
}
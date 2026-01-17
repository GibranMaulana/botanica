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
        // We will create 3 "Hero" products manually so they look good in your design
        $products = [
            [
                'name' => 'Midnight Recovery Serum',
                'description' => 'A potent restorative treatment that works overnight to repair skin barrier function. Rich in antioxidants and botanical extracts.',
                'is_featured' => true,
                'variants' => [
                    ['size' => '30ml', 'price' => 45.00, 'stock' => 100, 'sku' => 'MRS-30'],
                    ['size' => '50ml', 'price' => 75.00, 'stock' => 50, 'sku' => 'MRS-50'],
                ],
                'image' => 'products/serum-midnight.jpg'
            ],
            [
                'name' => 'Velvet Moss Cleanser',
                'description' => 'A gentle, pH-balanced cleanser derived from sea moss and green tea. Removes impurities without stripping natural oils.',
                'is_featured' => true,
                'variants' => [
                    ['size' => '150ml', 'price' => 28.00, 'stock' => 200, 'sku' => 'VMC-150'],
                    ['size' => 'Refill', 'price' => 22.00, 'stock' => 50, 'sku' => 'VMC-REF'],
                ],
                'image' => 'products/cleanser-moss.jpg'
            ],
            [
                'name' => 'Botanica Pure Oil',
                'description' => '100% cold-pressed jojoba and rosehip oil. The ultimate hydration lock for all skin types.',
                'is_featured' => false, // This one won't show on the homepage
                'variants' => [
                    ['size' => '50ml', 'price' => 35.00, 'stock' => 80, 'sku' => 'BPO-50'],
                ],
                'image' => 'products/oil-pure.jpg'
            ]
        ];

        foreach ($products as $data) {
            // 1. Create the Product
            $product = Product::create([
                'name' => $data['name'],
                'slug' => Str::slug($data['name']), // Automagically makes "midnight-recovery-serum"
                'description' => $data['description'],
                'is_featured' => $data['is_featured'],
            ]);

            // 2. Create the Variants (Looping through the sizes)
            foreach ($data['variants'] as $variant) {
                ProductVariant::create([
                    'product_id' => $product->id,
                    'size' => $variant['size'],
                    'price' => $variant['price'],
                    'stock' => $variant['stock'],
                    'sku' => $variant['sku'],
                ]);
            }

            // 3. Create a Dummy Image
            ProductImage::create([
                'product_id' => $product->id,
                'path' => $data['image'],
                'is_primary' => true,
                'sort_order' => 0
            ]);
        }
    }
}
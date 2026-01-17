<?php

use App\Http\Controllers\SanctuaryController;
use Illuminate\Support\Facades\Route;

Route::get("/", function () {
   return redirect()->route('sanctuary');
});

Route::get('/sanctuary', [SanctuaryController::class, 'index']
)->name('sanctuary');

Route::get('/collection', function() {
   return view('collection');
})->name('collection');

Route::get('/philosophy', function() {
   return view('philosophy');
})->name('philosophy');
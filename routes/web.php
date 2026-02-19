<?php

use App\Http\Controllers\CollectionController;
use App\Http\Controllers\PhilosophyController;
use App\Http\Controllers\SanctuaryController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect()->route('sanctuary');
});

Route::get(
    '/sanctuary',
    [SanctuaryController::class, 'index']
)->name('sanctuary');

Route::get('/collection', [CollectionController::class, 'index'])->name('collection');

Route::get('/philosophy', [PhilosophyController::class, 'index'])->name('philosophy');

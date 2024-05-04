<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ExamController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::group(['middleware' => 'auth'], function (){
    // School Admin Route Groups
    Route::group([
        'prefix' => 'admin'
    ], function () {
        Route::resource('exams', ExamController::class)
            ->only(['index', 'create'])
            ->middleware(['auth', 'verified']);
    });

    // Teacher Route Groups
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// To be deleted later
Route::get('/dashboard', function (){
    return "Man";
})->name('dashboard');

require __DIR__.'/auth.php';

<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ExamController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::group(['middleware' => 'auth'], function (){
    // School Admin Routes
    Route::group([
        'prefix' => 'admin',
        'as' => 'admin.'
    ], function (){
        Route::resource('exams', ExamController::class)
            ->only(['index', 'create', 'store'])
            ->middleware(['auth', 'verified']);

        // // Display a listing of the resource.
        // Route::get('/exams', function(){
        //     $exams = [
        //         'exams' => [
        //             [
        //                 'id' => '1',
        //                 'name' => 'Term 3',
        //                 'start_date' => '2024-11-15',
        //                 'end_date' => '2024-11-24',
        //                 'results_pending' => true,
        //                 'registered' => false
        //             ],
        //             [
        //                 'id' => '2',
        //                 'name' => 'Term 2',
        //                 'start_date' => '2024-07-24',
        //                 'end_date' => '2024-07-24',
        //                 'results_pending' => true,
        //                 'registered' => true
        //             ],
        //             [
        //                 'id' => '3',
        //                 'name' => 'Term 3',
        //                 'start_date' => '2023-11-15',
        //                 'end_date' => '2023-11-24',
        //                 'results_pending' => false,
        //                 'registered' => true
        //             ],
        //             [
        //                 'id' => '4',
        //                 'name' => 'Term 2',
        //                 'start_date' => '2023-07-24',
        //                 'end_date' => '2023-07-24',
        //                 'results_pending' => false,
        //                 'registered' => true
        //             ]
        //         ]
        //     ];

        //     return Inertia::render('SchoolAdmin/Exam/Index', $exams);
        // })->name('exams.index');

        // // Show the form for creating a new exam.
        // Route::get('/exams/create', function(){
        //     return Inertia::render('SchoolAdmin/Exam/Create');
        // })->name('exams.create');

        // // Store a newly created exam.
        // Route::post('/exam/store', function (Request $request){
        //     // validate data
        //     // authorize user
        //     // save exam
        //     // redirect to teacher verification page
        //     return redirect(route('admin.exams.create.teachers'));
        // })->name('exams.store');

        // // Show the page for verifying teacher data.
        // Route::get('/exam/create/teachers', function (Request $request){
        //     $teachers = [
        //         'teachers' => [
        //             [
        //                 'id' => '1',
        //                 'name' => 'Peter',
        //                 'surname' => 'Hluyo',
        //                 'email' => 'hluyo@gmail.com',
        //                 'classTeacher' => '1A',
        //                 'subjects' => [
        //                     [
        //                         'id' => '1',
        //                         'name' => 'Computer Science'
        //                     ]
        //                 ]
        //             ],
        //             [
        //                 'id' => '2',
        //                 'name' => 'John',
        //                 'surname' => 'Musademba',
        //                 'email' => 'musademba@gmail.com',
        //                 'classTeacher' => 'N/A',
        //                 'subjects' => [
        //                     [
        //                         'id' => '2',
        //                         'name' => 'Geography'
        //                     ],
        //                     [
        //                         'id' => '3',
        //                         'name' => 'History'
        //                     ]
        //                 ]
        //             ],
        //             [
        //                 'id' => '3',
        //                 'name' => 'Martha',
        //                 'surname' => 'Mutseyami',
        //                 'email' => 'mutseyami@gmail.com',
        //                 'classTeacher' => 'N/A',
        //                 'subjects' => [
        //                     [
        //                         'id' => '4',
        //                         'name' => 'Shona'
        //                     ],
        //                     [
        //                         'id' => '5',
        //                         'name' => 'Literature'
        //                     ],
        //                     [
        //                         'id' => '6',
        //                         'name' => 'English'
        //                     ]
        //                 ]
        //             ],
        //         ]
        //     ];

        //     return Inertia::render('SchoolAdmin/Exam/CreateTeachers', $teachers);
        // })->name('exams.create.teachers');
    }); 

    // Teacher Routes
    Route::group([
        'prefix' => 'admin',
        'as' => 'admin.'
    ], function (){
        // code...
    });
});
    

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
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
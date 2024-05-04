<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;


class DashboardController extends Controller
{
    public function exams()
    {
        return Inertia::render('SchoolAdmin/Dashboard');
    }
}

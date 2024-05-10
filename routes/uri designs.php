<?php

public function FunctionName()
{
    // Program Entities
    // Schools, Classes, Subjects, Teachers, Students, Exams

    // Admin URIs
    'ADMIN = gradebook.com/schools/{id}/admin'

    '{ADMIN}';
    '{ADMIN}/exams';                                // Exam Listing, POST 
    '{ADMIN}/exams/{id}';                           // GET, PUT/PATCH, DELETE
    '{ADMIN}/exams/create/';                        // Show create/post form
    '{ADMIN}/exams/{id}/create/verify-subjects/';
    '{ADMIN}/exams/{id}/create/verify-teachers/';
    '{ADMIN}/exams/{id}/create/verify-classes/';
    '{ADMIN}/exams/edit/{id}';                      // Show edit form

    '{ADMIN}/teachers?subject={id}';
    '{ADMIN}/teachers/{id}';
    '{ADMIN}/classes?exam={id}';
    '{ADMIN}/classes/{id}';
    '{ADMIN}/subjects?class={id}&exam={id}';
    '{ADMIN}/subjects/{id}';
    '{ADMIN}/students?exam={id}&class={id}';
    '{ADMIN}/students/{id}';
    '{ADMIN}/reports?exam={id}&student={id}';
    '{ADMIN}/reports/{id}';

    // Teacher URIs
    'TEACHER = gradebook.com/schools/{id}/teacher'

    '{TEACHER}';
    '{TEACHER}/exams';                                // Exam Listing 
    '{TEACHER}/exams/{id}';                           // GET, PUT/PATCH, DELETE

    '{TEACHER}/my-classes';
    '{TEACHER}/my-classes/{my-class-id}';
    '{TEACHER}/subjects';
    '{TEACHER}/subjects/{my-subject-id}';
    '{TEACHER}/students';
    '{TEACHER}/students/{my-student-id}';
    '{TEACHER}/reports';
    '{TEACHER}/reports/{my-reports-id}';
}
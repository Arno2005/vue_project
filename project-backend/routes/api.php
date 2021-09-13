<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('register', [AuthController::class, 'register'])->name('register.api');
Route::post('login', [AuthController::class, 'login'])->name('login.api');
Route::post('verification', [AuthController::class, 'verify'])->name('verify.api');

Route::get('/products', [ProductController::class, 'index'])->name("countries.index");

Route::get('/products/create', [ProductController::class, 'create'])->middleware('auth:api');
Route::post('/products/create', [ProductController::class, 'store'])->middleware('auth:api');

Route::get('/products/edit/{id}', [ProductController::class, 'edit']);
Route::post('/products/edit/{id}', [ProductController::class, 'update']);

Route::post('/products/delete/{id}', [ProductController::class, 'delete']);

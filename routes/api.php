<?php

use App\Http\Controllers\Api\AlbumController;
use App\Http\Controllers\Api\ArtistController;
use App\Http\Controllers\Api\GenreController;
use App\Http\Controllers\Api\TrackController;
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

Route::resource('artists', ArtistController::class)
    ->only(['index', 'show']);
Route::resource('albums', AlbumController::class)
    ->only(['index', 'show']);
Route::resource('tracks', TrackController::class)
    ->only(['index', 'show']);
Route::resource('genres', GenreController::class)
    ->only(['index', 'show']);


/*
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
*/


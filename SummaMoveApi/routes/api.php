<?php

use App\Http\Controllers\PresentatieController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\GuestOefeningenControl;
use App\Http\Controllers\OefeningenController;
use App\Http\Controllers\AuthenticationController;
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

Route::get('Guest', [GuestOefeningenControl::class, 'index']);
Route::post('auth/register', [AuthenticationController::class, 'register']);
Route::post('auth/login', [AuthenticationController::class, 'login']);



// Route::group(['middleware' => ['auth:sanctum']], function () {
    //protected routes
    Route::apiResource('prestaties', PresentatieController::class);
    Route::apiResource('oefeningen', OefeningenController::class);
    Route::post('/logout', [AuthenticationController::class, 'logout']);
// });

Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::post('ping', function (Request $request) {
        return response()->json([
            'message' => 'pong',
        ]);
    });
});

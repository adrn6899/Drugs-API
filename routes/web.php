<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// Route::resource('Openfda','OpenfdaController');
Route::get('/openfda','OpenfdaController@index')->middleware('auth');
Route::get('/rx','RxController@index')->middleware('auth');
// Route::resource('rx','RXController');
Route::get('/rx/save','RxController@drugStore')->name('rx.save')->middleware('auth');
// Route::get('/interaction','InteractionController@index');
Route::post('/interaction','InteractionController@index')->middleware('auth');

Route::get('/openFDA/index','OpenfdaController@index')->name('open.fda.index')->middleware('auth');
Route::get('/rxnorm/index','RxController@index')->name('rx.norm.index')->middleware('auth');
Route::get('/medicines','RxController@showAll')->name('medicines.index')->middleware('auth');
Route::get('/drug/interactions','InteractionController@index')->name('drug.interactions')->middleware('auth');
Route::get('/interactions','InteractionController@indexInteraction')->name('interaction.index')->middleware('auth');

Route::get('/getalldrugs','RxController@getAllDrugs')->name('getall.drugs');




Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

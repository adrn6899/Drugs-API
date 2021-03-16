<?php

namespace App\Http\Controllers;

use App\Openfda;
use Illuminate\Http\Request;

class OpenfdaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return view('openfda.index');
    }

}

<?php

namespace App\Http\Controllers;

use App\interaction;
use Illuminate\Http\Request;

class InteractionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return view('interaction.index');
    }

    public function indexInteraction()
    {
        //
        return view('searchInteraction');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        // $interaction = New Interaction;
        // $interaction->Brand_Name = $request->input('brand_name');
        // $interaction->Generic_Name = $request->input('generic_name');
        // $interaction->Description = $request->input('description');
        // $interaction->Ask_Doctor = $request->input('ask_doctor');
        // $interaction->Dosage = $request->input('dosage');
        // $interaction->Pregnant = $request->input('pregnant');
        // $interaction->Is_Branded = $request->input('is_branded');
        // $interaction->Medicine_Name = $request->input('medicine_name');
        // $interaction->RXCUI_ID = $request->input('rxcui_id');
        // $interaction->Interaction = $request->input('interaction');
        // $interaction->Severity = $request->input('severity');
        // // $interaction->save();
        // dd($interaction);
        // // return Redirect::to('welcome')->with('success','New Data Added');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\interaction  $interaction
     * @return \Illuminate\Http\Response
     */
    public function show(interaction $interaction)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\interaction  $interaction
     * @return \Illuminate\Http\Response
     */
    public function edit(interaction $interaction)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\interaction  $interaction
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, interaction $interaction)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\interaction  $interaction
     * @return \Illuminate\Http\Response
     */
    public function destroy(interaction $interaction)
    {
        //
    }
}

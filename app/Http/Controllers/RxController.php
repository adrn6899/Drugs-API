<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Auth;
// use App\Auth;
use App\rx;
use DB;
use Illuminate\Http\Request;

class RxController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return view('rx.index');
    }

    public function showAll()
    {
        $result = rx::where('user_id', Auth::user()->id)->get();

        // dd($result);
        return view('medicine')->with('medicines', $result);
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

    }

    public function drugStore(Request $request)
    {
        //
        //dd([$request, $request->input('brand'), $request->get('brand'), request()->brand]);
        $id = Auth::id();
        // dd($id); 
        // $rx = New rx;
        // $rx->Brand_Name = $request->input('brand');
        // $rx->Generic_Name = $request->input('gener');
        // $rx->Description = $request->input('descrip');
        // $rx->Ask_Doctor = $request->input('askdoc');
        // $rx->Dosage = $request->input('dose');
        // $rx->Pregnant = $request->input('pregg');
        // $rx->Is_Branded = $request->input('isbran');
        // $rx->Medicine_Name = $request->input('mdname');
        // $rx->RXCUI_ID = $request->input('rxid');
        // $rx->Interaction = $request->input('inter');
        // $rx->Severity = $request->input('seve');
        // $rx->save();
        DB::table('interaction')->insert([
            'user_id'=>$id = Auth::id(),
            //$request->auth()->user()->id,
            'Brand_Name' =>$request->input('brand'),
            'Generic_Name' =>$request->input('gener'),
            'Description' =>$request->input('descrip'),
            'Ask_Doctor' =>$request->input('askdoc'),
            'Dosage' =>$request->input('dose'),
            'Pregnant' =>$request->input('pregg'),
            'Is_Branded' =>$request->input('isbran'),
            'Medicine_Name' =>$request->input('mdname'),
            'RXCUI_ID' =>$request->input('rxid'),
            'Interaction' =>$request->input('inter'),
            'Severity' =>$request->input('seve')
        ]);

        DB::table('openfda')->insert([
            'user_id'=>$id = Auth::id(),
            'Brand_Name' =>$request->input('brand'),
            'Generic_Name' =>$request->input('gener'),
            'Description' =>$request->input('descrip'),
            'Ask_Doctor' =>$request->input('askdoc'),
            'Dosage' =>$request->input('dose'),
            'Pregnant' =>$request->input('pregg'),
        ]);

        DB::table('rx')->insert([
            'user_id'=>$id = Auth::id(),
            'Is_Branded' =>$request->input('isbran'),
            'Medicine_Name' =>$request->input('mdname'),
            'RXCUI_ID' =>$request->input('rxid')
        ]);

        DB::table('interactions')->insert([
            'user_id'=>$id = Auth::id(),
            'Interaction'=>$request->input('inter'),
            'Severity' =>$request->input('seve')
        ]);


        // dd($rx);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\rx  $rx
     * @return \Illuminate\Http\Response
     */
    public function show(rx $rx)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\rx  $rx
     * @return \Illuminate\Http\Response
     */
    public function edit(rx $rx)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\rx  $rx
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, rx $rx)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\rx  $rx
     * @return \Illuminate\Http\Response
     */
    public function destroy(rx $rx)
    {
        //
    }
}

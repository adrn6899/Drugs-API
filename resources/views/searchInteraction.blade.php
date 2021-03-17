@extends('welcome')
{{-- @extends('welcome') --}}
@section('content')
<div style="width:80%;padding:16px;">
    <h1>DRUG INTERACTIONS </h1>
    <h6><i>knowing the effects of medicine can help you mitigate such illness</i></h6>
    <div>
        <label>Interaction</label>
        <input type="text" name="medicine1" id="medicine1"> +
        <input type="text" name="medicine2" id="medicine2">
        <button id="fetch3" class="btn btn-success">Search</button>
    </div>
    <div class="row">
        <div class="col">
            <div id="main"></div>
        </div>
        <div class="col">
            <div class="rximages"></div>
        </div>
    </div>
    <script src="{{asset('js/interaction.js')}}"></script>
    <script src="{{asset('js/interactionsession.js')}}"></script>
@endsection
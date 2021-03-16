@extends('welcome')
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
    <div id="main"></div>
    {{-- <div class="form-row" style="padding:20px;">
        <p>To submit for database purpose click here</p>
        <button type="submit" class="btn-secondary" onclick="handleSubmit()">Save</button>
    </div> --}}
	<script src="{{asset('js/interaction.js')}}"></script>
	<script src="{{asset('js/interactionsession.js')}}"></script>
@endsection
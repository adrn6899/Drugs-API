@extends('welcome')
@section('content')
<div style="width:80%;padding:16px;"> 
    <h1>OPEN FOOD AND DRUGS RESOURCE</h1>
    <h6><i>Serves public FDA data about nouns for drugs.</i></h6>
    <form action="#" method="POST">
        @csrf
            <label style="padding:5px;">Medicine</label>
        <div class="form-row">
            <input type="text" class="form-control"  style="width:80%" name="medicine" id="medicine" placeholder="Search for medicine">
            <button id="fetch1" class="btn btn-success">Search</button>
        </div>
    </form>
    {{-- <div class="form-row" style="padding:20px;">
        <p>To submit for database purpose</p>
        <button type="submit" class="btn-secondary" onclick="handleSubmit()">Save</button>
    </div> --}}
<form action="interaction"  method="POST">
    @csrf
    <div class="container" style="width: auto">
        <div id="left">
           <div>
            </div>
            <div class="row" id="main-left" style="width: 350px; ">

            </div> 
        </div>
    </div>
</form>
    <script src="{{asset('js/index.js')}}"></script>
    <script src="{{asset('js/copyall.js')}}"></script>
    <script src="{{asset('js/rx.js')}}"></script>
    <script src="{{asset('js/interaction.js')}}"></script>

@endsection
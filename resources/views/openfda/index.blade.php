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
            <div class="row" id="main-left" style="width: 100%;">
                    <div style="display:block;margin-left:auto;margin-right:auto;text-align:center;">
                        <h1 class="text-muted"><i class="fas fa-pills fa-7x" style="color:#6c757d;"></i>
                        <br> NO Content Available <span><h5>search for medicine</h5></span></h1> 
                    </div>
            </div> {{--main-left--}}
          </div> 
        </div>
    </div>
</form>
</div>
    <script src="{{asset('js/index.js')}}"></script>
    <script src="{{asset('js/copyall.js')}}"></script>
    <script src="{{asset('js/rx.js')}}"></script>
    <script src="{{asset('js/interaction.js')}}"></script>

@endsection
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
    <div class="no-content" style="padding:5%;display:block;margin-left:auto;margin-right:auto;text-align:center;">
        <h1 class="text-muted">
        <i class="fas fa-prescription-bottle-alt fa-7x" style="color:#6c757d;"></i>
        <br> NO Content Available <span><h5>search for medicines</h5></span></h1> 
    </div>
    <div class="interaction-contents">
    <div class="row">
        <div class="col">
            <div id="main">
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="rximages">
            </div>
        </div>
        <div class="col">
            <div class="rightimages">
        </div>
        </div>
    </div>
    </div>
</div>
    <script src="{{asset('js/interaction.js')}}"></script>
    <script src="{{asset('js/interactionsession.js')}}"></script>
@endsection
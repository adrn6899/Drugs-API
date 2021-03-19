{{-- @extends('welcome') --}}

@include('navbar')
@include('layouts.app')
{{-- @section('content') --}}
<div class="container" style="padding:6%;">
<div class="alert alert-primary" role="alert">
  <h1><i>Wonder how it works?!</i></h1>
</div>
<div class="alert alert-info" role="alert" style="text-align:center;">
  <p style="display:inline;padding-right:30px;">Search medicine on open FDA</p><p style="display:inline;padding-right:30px;padding-left:30px;">See if it is Branded or Generic</p><p style="display:inline;padding-left:30px">Know what drugs to take </p>
</div>
<div class="d-flex justify-content-center mx-auto">
<img src="{{asset('images/openfda.png')}}"/>
<img src="{{asset('images/fast-forward.png')}}" style="width:100px;height:120px;padding-top:60px;"/>
<img src="{{asset('images/rxnorm.jpg')}}" style="width:200px;height:200px;"/>
<img src="{{asset('images/fast-forward.png')}}" style="width:100px;height:120px;padding-top:60px;"/>
<img src="{{asset('images/pills.png')}}" style="width:100px;height:200px;"/>
</div>
<blockquote class="blockquote text-center">
  <i class="mb-0" style="font-size:1.5em;">For an ordinary person without proper knowledge about drugs/medecine and its side effect, this app can help to enlighten them and give them insights and knowledge about certain products and how they can cope up if ever they came across with someone experiencing adverse reaction because of a certain drug</i>
  <footer class="blockquote-footer">Pusana, Aaron <cite title="Source Title">Drug</cite></footer>
</blockquote>
</div>
{{-- @endsection --}}
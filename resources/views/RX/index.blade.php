@extends('welcome')
@section('content')
<div style="width:80%;padding:16px;">
    <h1>RX NORM DRUGS RESOURCE</h1>
    <h6><i>Web service for accessing the current RxNorm data set</i></h6>
    <form action="#" method="POST">
		<label style="padding:5px;">Medicine</label>
		<div class="form-row">
			<input type="text" name="rxc" id="rxc"  style="width:80%;" class="form-control" placeholder="Search for medicine/drug">
			<button id="fetch2" class="btn btn-success">Fetch</button>
		</div>
	</form>
	    {{-- <div class="form-row" style="padding:20px;">
        <p>To submit for database purpose</p>
        <button type="submit" class="btn-secondary" onclick="handleSubmit()">Save</button>
    </div> --}}
	<div class="row" id="main" style="padding:20px;">
		<div style="display:block;margin-left:auto;margin-right:auto;text-align:center;">
			<h1 class="text-muted"><i class="fas fa-file-prescription fa-7x" style="color:#6c757d;"></i>
			<br> NO Content Available <span><h5>search for medicine</h5></span></h1> 
		</div>
	</div>
</div>
	<script src="{{asset('js/Rx.js')}}"></script>
	<script src="{{asset('js/rxsession.js')}}"></script>
@endsection
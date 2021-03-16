@extends('welcome')
@section('content')

    <form action='#' method="GET" ></form>
        @csrf
        
        <div style="width:80%;padding:16px;letter-spacing:2px;">
            <h5>
                <strong>Brand Name:</strong> <span id="result-branded" name="brand_name">
            </h5>
            <h5>
                <strong>Generic Name:</strong> <span id="result-generic" name="generic_name">
            </h5>
            <h5>
                <strong>Description:</strong> <span id="result-description" name="description">
            </h5>
            <h5>
                <strong>Ask Doctor:</strong> <span id="result-ask" name="ask_doctor">
            </h5>
            <h5>
                <strong>Dosage: </strong><span id="result-dosage" name="dosage">
            </h5>
            <h5>
               <strong> Pregnant: </strong><span id="result-pregnant" name="pregnant">
            </h5>
            {{-- RXCUI STATS --}}
            <h5>
               <strong>Is Branded:</strong> <span id="result-isbranded" name="is_branded">
            </h5>
            <h5>
                <strong>Medicine Name:</strong> <span id="result-medname" name="medicine_name">
            </h5> 
            <h5>
                <strong>RXCUI ID:</strong> <span id="result-rxcui" name="rxcui_id">
            </h5>    
            {{-- INTERACTION STAT --}}
            <h5>
               <strong>Interaction:</strong> <span id="result-interaction" name="interaction">
            </h5>
            <h5>
                <strong>Severity:</strong> <span id="result-severity" name="severity">
            </h5>    
        </div>
            <button type="Submit" class="btn btn-success" id="fetch_all">Save</button>
    </form> 

<script src="{{asset('js/getall.js')}}"></script>
@endsection
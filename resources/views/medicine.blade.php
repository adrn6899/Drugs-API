@extends('welcome')
@section('content')
<div style="padding:16px;">
<h1>Medicine Records</h1>
<h6><i>All medicinal records that has been verified and stored for purpose</i></h6>
<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Brand_Name</th>
      <th scope="col">Generic_Name</th>
      {{-- <th scope="col">Description</th> --}}
      <th scope="col">Ask_Doctor</th>
      <th scope="col">Dosage</th>
      <th scope="col">Pregnant</th>
      <th scope="col">Is_Branded</th>
      <th scope="col">Medicine_Name</th>
      <th scope="col">RXCUI_ID</th>
      <th scope="col">Interaction</th>
      <th scope="col">Severity</th> 
    </tr>
  </thead>
  <tbody>
    @foreach($medicines as $medicine)
        <tr>
        <th scope="row">{{$medicine->id}}</th>
        <td>{{$medicine->Brand_Name}}</td>
        <td>{{$medicine->Generic_Name}}</td>
        {{-- <td>{{$medicine->Description}}</td> --}}
        <td>{{$medicine->Ask_Doctor}}</td>
        <td>{{$medicine->Dosage}}</td>
        <td>{{$medicine->Pregnant}}</td>
        <td>{{$medicine->Is_Branded}}</td>
        <td>{{$medicine->Medicine_Name}}</td>
        <td>{{$medicine->RXCUI_ID}}</td>
        <td>{{$medicine->Interaction}}</td>
        <td>{{$medicine->Severity}}</td>
        </tr>
    @endforeach
  </tbody>
</table>
</div>
@endsection
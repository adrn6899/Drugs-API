@extends('welcome')
@section('content')
<div style="padding:16px;">
<h1>Medicine Records</h1>
<h6><i>All medicinal records that has been verified and stored for purpose</i></h6>
<table class="table table-striped" style="width:100%;">
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
  {{-- make a counter and while looping on the medicine
        increment it and use it for id --}}
    <?php $counter = 1;?>
    @foreach($medicines as $medicine)
        <tr>
        <th scope="row">{{$counter}}</th>
        <td>{{$medicine->Brand_Name}}</td>
        <td>{{$medicine->Generic_Name}}</td>
        {{-- <td>{{$medicine->Description}}</td> --}}
        <td>{{ substr($medicine->Ask_Doctor,0,300)}}</td>
        <td>{{substr($medicine->Dosage,0, 150)}}</td>
        <td>{{ substr($medicine->Pregnant, 0, 150)}}</td>
        <td>{{$medicine->Is_Branded}}</td>
        <td>{{$medicine->Medicine_Name}}</td>
        <td>{{$medicine->RXCUI_ID}}</td>
        <td>{{$medicine->Interaction}}</td>
        <td>{{$medicine->Severity}}</td>
        </tr>
        <?php $counter += 1; ?>
    @endforeach
  </tbody>
</table>
</div>
@endsection
@extends('welcome')
@section('docs')
<div class="container-fluid">
<div class="row flex-xl-nowrap">
  <div class="col-12 col-md-3 col-xl-2 bd-sidebar">
    <div style="margin:auto;position:fixed;">
    <ul class="list-group-flush">
        <li class="list-group-item"><a href="#nav">Drug's App</a></li>
        <li class="list-group-item"><a href="#fda">Open FDA</a></li>
        <li class="list-group-item"><a href="#rxnorm">Rx Norm</a></li>
        <li class="list-group-item"><a href="#rxnav">Rx Nav</a></li>
        <li class="list-group-item"><a href="#functions">Functions</a>
            <ul class="list-group-flush">
                <li class="list-group-item"><a href="#funcfda">FDA page</a></li>
                <li class="list-group-item"><a href="#funcrxnorm">Rx page</a></li>
                <li class="list-group-item"><a href="#funcmain">Main page</a></li>
                <li class="list-group-item"><a href="#funcapi">Additional</a></li>
            </ul>
        </li>
        <li class="list-group-item"><a href="#api">Website API</a>
            <ul class="list-group-flush">
                <li class="list-group-item"><a href="#getapi"><strong>GET</strong>/interaction</a>
            </ul>
        </li>
    </ul>
    </div>
  </div>
  <div class="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content" style="background-color:#dde4f0;">
        <div id="nav" style="text-align:justify">
            <h3>DRUGS API</h3>
            <blockquote>This web application of drug interaction is made and develop for people whose purpose is to find the adverse reactions of the medicine they take and have been prescribe to them mainly because it is right to know how it may affect the body for taking the medicine/drugs simultaneously or altogether. Another sole purpose of this web application is to inform user whether a certain medicine you are not familiar with is a branded or a generic one if it’s safe or not. And finally get to know how doctors and pharmacist will tell if this medicines needs prescription or not so it can be taken instantly. The simple solution for user demands of knowing the medicinal information is done by this website with the help of integrating a reliable open source application programming interface namely openFDA and the RxNorm, RxNav Application Programming Interfaces (API’s).</blockquote>
        </div>
        <hr>
        <div id="fda">
            <h3>OPEN FDA</h3>
            <span><h4>API</h4></span>
            <blockquote>
                <p>openFDA is an Elasticsearch-based API that serves public FDA data about nouns like drugs, devices, and foods.</p>

                <p>The API returns individual results as JSON by default.</p> 
                    The JSON object has two sections:
                    <li>meta: Metadata about the query, including a disclaimer, link to data license, last-updated date, and total matching records, if applicable.</li>
                    <li>results: An array of matching results, dependent on which endpoint was queried.</li>
            </blockquote>
        </div>
        <hr>
        <div id="rxnorm">
            <h3>RX NORM</h3>
            <span><h4>API</h4></span>
            <blockquote>
                <p>RxNorm API is a web service for accessing the current RxNorm data set </p>
                <p>Get the drug products associated with a specified name. The name can be an ingredient, brand name, clinical dose form, branded dose form, clinical drug component, or branded drug component.</p>
                <p>The following table shows examples of input and the types of drug products returned.</p>
            </blockquote>
        </div>
        <hr>
        <div id="rxnav">
            <h3>RX NAV</h3>
            <span><h4>API</h4></span>
            <blockquote>
                <p>RxNav finds drugs in RxNorm from the names and codes in its constituent vocabularies. RxNav displays links from clinical drugs, both branded and generic, to their active ingredients, drug components and related brand names.</p>
            </blockquote>
        </div>
        <hr>
        <div id="functions">
            <h3>FUNCTIONS</h3>
            <span><h4><i>Technical Aspects</i></h4></span>
            <blockquote>
                    <ul class="list-group-flush"> 
                        <li>The system can provide information like dosage intake requirements, 
                            prescription (a note) from a doctor or pharmacist, and medicinal information.</li> 
                        <li>The system is backed by trusted sources and structured collection of data’s from its 
                            provider namely the openFDA and RxNorm API’s.</li>
                    </ul>
                    <h4>System Functionalities</h4>
                    <ul class="list-group-flush">
                        <div id="funcfda"><h4><strong><i>open FDA page</i></strong></h4>
                            <li>Display details from a particular medicine provided by data from openFDA </li>
                        </div>
                        <div id="funcrxnorm"><h4><strong><i>Rx Norm page</i></strong></h4>
                            <li>Search for a name in the RxNorm data set and return the RxCUIs of 
                            any concepts which have that name as an RxNorm term or as a synonym of an RxNorm term.
                            </li>
                        </div>
                        <div id="funcmain"><h4><strong><i>Main Drug Interaction Application</i></strong></h4>
                            <li>A <strong>search bar</strong> backed with a jQuery Autocomplete UI (Data is fetched from website database)</li>
                            <li>Show <strong>interaction</strong> with two medicines entered by users</li>
                            <li>Describe <strong>severity of drugs</strong> based from user input</li>
                            <li>Suggests <strong>available branded drugs</strong> from searched medicine</li>
                            <li>Show related <strong>images</strong> of that drugs/medicine</li>
                            <li>List all user specific <strong>medicine records</strong> in database</li>
                            <li>Functional <strong>Login</strong> and user authentication</li>
                        </div>
                        <div id="funcapi"><h4><strong><i>Additional Functionality</i></strong></h4>
                            <li>Provide <strong>API GET request</strong> for branded drugs, get data from website database</li>
                        </div>
                    </ul>
            </blockquote>
        </div>
        <hr>
        <div id="api">
            <h3>WEBSITE API</h3>
            <span><h4>Pulls data from own database</h4></span>
            <div id='getapi'>
                <h3>GET Request : Branded Drugs</h3>
                <p>This query searches for all the branded drugs name related to the drug/medicine request.</p>
                <p>Query parameters: Name of medicine, ex:<span> name=paracetamol</span></p>
                <form method="GET">
                    <div class="form-group">
                    <input type="text" class="form-control form-control-lg" id="queryGetBD" value="/api/GET/branded/druglist?name=paracetamol" style="background-color:black;color:white;"/>
                    </div>
                    <button id="runGetBD" type="submit" class="btn btn-secondary">RUN QUERY</button>
                </form>
                <div style="padding-top:20px;">
                    <div style="width:100%">
                        <pre id="runGetContent" style="background-color:white;"></pre>
                    </div>
                </div>
            </div>
        </div>
  </div>
</div>
</div>
<script src="{{asset('js/api.js')}}"></script>
@endsection

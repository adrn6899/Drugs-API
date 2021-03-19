// window.addEventListener('load', () => {
// })

$(function(){
	
	const branded = sessionStorage.getItem('BRANDED');
	const generic = sessionStorage.getItem('GENERIC');
	const description = sessionStorage.getItem('DESCRIPTION');
	const ask = sessionStorage.getItem('ASKED');
	const dosage = sessionStorage.getItem('DOSAGE');
	const preggy = sessionStorage.getItem('PREGNANT');
	
	const brand = sessionStorage.getItem('BRAND_NAME');
	const medName = sessionStorage.getItem('MED_NAME');
	const rxcui = sessionStorage.getItem('RXCUI');
	
	const desc = sessionStorage.getItem('DESC');
	const severe = sessionStorage.getItem('SEVERITY');
	
	document.getElementById('result-branded').innerHTML = branded;
	document.getElementById('result-generic').innerHTML = determineDrug();
	document.getElementById('result-description').innerHTML = description;
	document.getElementById('result-ask').innerHTML = ask;
	document.getElementById('result-dosage').innerHTML = dosage;
	document.getElementById('result-pregnant').innerHTML = preggy;
	
	document.getElementById('result-isbranded').innerHTML = brand;
	document.getElementById('result-medname').innerHTML = medName;
	document.getElementById('result-rxcui').innerHTML = rxcui;
	
	document.getElementById('result-interaction').innerHTML = desc;
	document.getElementById('result-severity').innerHTML = severe;

	checkSessionStorage();

	function checkSessionStorage(){
		if(sessionStorage.length == 0){
			$('#knowYourMed-form').remove();
			$('#recentSearches').html(
				'<div style="display:block;margin-left:auto;margin-right:auto;text-align:center;padding:10%;">'+
				'<h1 class="text-muted"><i class="fas fa-pills fa-7x" style="color:#6c757d;"></i>'+
				'<br> What\'s your medicine? ... <span><h5>No recent searches found</h5><h5><a href="/openFDA/index">search for medicine</a></h5></span></h5>'+
				'</div>');		
		} else {
			$('#recentSearches').css('padding-top', '25px');
			$('#recentSearches').html('<div class="alert alert-primary" role="alert"> <h4 class="alert-heading">Recent Searches</h4>'+
			'<hr>'+searchesWords()+'</div>');
		};
	}

	function searchesWords(){
		var searchesString = '<div class="container"><div class="row">';
		if(sessionStorage.getItem("MED1_INTERACTION") != null){
			searchesString += '<div class="col">Interaction searched: '+sessionStorage.getItem("MED1_INTERACTION")+" + "+sessionStorage.getItem("MED2_INTERACTION")+'</div>';
		}
		if(sessionStorage.getItem("FDA_SEARCH") != null){
			searchesString += '<div class="col">openFDA searched : '+sessionStorage.getItem("FDA_SEARCH")+'</div>';
		}
		if(sessionStorage.getItem("RX_SEARCH") != null){
			searchesString += '<div class="col">Rx Norm searched : '+sessionStorage.getItem("RX_SEARCH")+'</div>';
		}
		return searchesString += '</div></div>'; 
	}


	function determineDrug(){
		if(sessionStorage.getItem('GENERIC') == "No Generic Name Available"){
			if(sessionStorage.getItem('BRAND_NAME') == "NO"){
				return sessionStorage.getItem('MED_NAME');
			} else {
				return sessionStorage.getItem('GENERIC');
			}
		} else {
			return sessionStorage.getItem('GENERIC');
		}
	}

	// save button 
	$('#fetch_all').on('click', function(e){
        e.preventDefault();
		$.ajax({
			type:'GET',
			url:'/rx/save',
			dataType:'json',
			data: {
				brand:$('#result-branded').text(),
				gener:determineDrug(),
				descrip:$('#result-description').text(),
				askdoc:$('#result-ask').text(),
				dose:$('#result-dosage').text(),
				pregg:$('#result-pregnant').text(),
				isbran:$('#result-isbranded').text(),
				mdname:$('#result-medname').text(),
				rxid:$('#result-rxcui').text(),
				inter:$('#result-interaction').text(),
				seve:$('#result-severity').text(),
			},
			success:function(data){
				console.log(data);
				$('#dialog-content').html(data["message"]);
				$( "#dialog" ).dialog({ 
					buttons: {
						OK: function() {$(this).dialog("close");}
				 	},
				});				
			},
		})
	});


});
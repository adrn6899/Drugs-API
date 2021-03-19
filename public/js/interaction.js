
// $(document).ready(function(){



	
// 	$("#fetch3").click(function(e){
// 		var mdcn1 = document.getElementById("medicine1").value;
// 		var mdcn2 = document.getElementById("medicine2").value;
// 		console.log(mdcn1,mdcn2);
// 		var rxcui1;
// 		var rxcui2;
// 		e.preventDefault();
// 		$('#main').html('')
// 		$.ajax({
// 			type: 'GET',
// 			url: 'https://rxnav.nlm.nih.gov/REST/rxcui.json?name=' +  mdcn1,
// 			success: function (response){
// 				rxcui1 = response.idGroup.rxnormId;
// 				console.log(rxcui1 + " meron rxcui 1")
// 			}
// 		})
// 		$.ajax({
// 			type: 'GET',
// 			url: 'https://rxnav.nlm.nih.gov/REST/rxcui.json?name=' +  mdcn2,
// 			success: function(response){
// 				rxcui2 = response.idGroup.rxnormId;
// 				console.log(rxcui2 + " meron rxcui 2");

// 				$.ajax({
// 					type: 'GET',
// 					url:'https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis='+ rxcui1 +'+'+ rxcui2,
// 					success: function (response){
// 							console.log(response);

// 							if(response.fullInteractionTypeGroup == null)
// 							{
// 								$('#main').append(`
// 									<h3 class="card-title">Drug interaction can cause you this</h3>
// 									<textarea id="inter_desc" cols="80" rows="8" disabled  style="background-color:#ffffff">No interaction found , Ooops It looks like this medicine is safe to be taken</textarea>
// 									<h3>Severity</h3>
// 									<textarea id="inter_severe" cols="80" rows="8" disabled  style="background-color:#ffffff">Ooops It looks like this medicine is safe to be taken</textarea>										
// 									`)
// 							} else {
// 								console.log(response.fullInteractionTypeGroup[0].fullInteractionType[0].interactionPair[0].description)
// 								$('#main').append(`
// 								<h3 class="card-title">Drug interaction can cause you this</h3>
// 								<textarea id="inter_desc" cols="80" rows="8" disabled  style="background-color:#ffffff">${response.fullInteractionTypeGroup[0].fullInteractionType[0].interactionPair[0].description}</textarea>
// 								<h3>Severity</h3>
// 								<textarea id="inter_severe" cols="80" rows="8" disabled  style="background-color:#ffffff">${response.fullInteractionTypeGroup[0].fullInteractionType[0].interactionPair[0].severity}</textarea>										
// 								`)
// 							}
// 								// <input type="text" id="inter_severe" value="${response.fullInteractionTypeGroup[0].fullInteractionType[0].interactionPair[0].severity}">
// 								// <input type="text" id="inter_desc" value="${response.fullInteractionTypeGroup[0].fullInteractionType[0].interactionPair[0].description}">
							
// 						},
// 						complete: function(){
// 							const interDesc = $('#inter_desc').val();
//                             const interSevere = $('#inter_severe').val();
//                             sessionStorage.setItem("DESC",interDesc);
//                             sessionStorage.setItem("SEVERITY",interSevere); 
// 						}
// 				});


// 			}
// 		});
// 	});
// });
$(document).ready(function(){
		
	$("#fetch3").click(function(e){
		e.preventDefault();
		$('#main').empty();
		$('#rximages').empty();
		$('#rightimages').empty();

		var rxcui1Images = [];
		var rxcui2Images = [];
		var brandedMdcn1 = [];
		var brandedMdcn2 = [];
		var mdcn1 = document.getElementById("medicine1").value;
		var mdcn2 = document.getElementById("medicine2").value;
		var rxcui1;
		var rxcui2;

		rxcui1Images = getImages(mdcn1,rxcui1Images);
		rxcui2Images = getImages(mdcn2,rxcui2Images);

		brandedMdcn1 = getRelatedMedicine(mdcn1);
		brandedMdcn2 = getRelatedMedicine(mdcn2);
		
		$.ajax({
			type: 'GET',
			url: 'https://rxnav.nlm.nih.gov/REST/rxcui.json?name=' +  mdcn1,
			success: function (response){
				rxcui1 = response.idGroup.rxnormId;
			}
		})
		$.ajax({
			type: 'GET',
			url: 'https://rxnav.nlm.nih.gov/REST/rxcui.json?name=' +  mdcn2,
			success: function(response){
				rxcui2 = response.idGroup.rxnormId;

				$.ajax({
					type: 'GET',
					url:'https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis='+ rxcui1 +'+'+ rxcui2,
					success: function (response){
						
							if(response.fullInteractionTypeGroup == null)
							{
								$('#main').append(`
									<h3 class="card-title">Drug interaction can cause you this</h3>
									<textarea id="inter_desc" cols="80" rows="8" disabled  style="background-color:#ffffff">No interaction found , Ooops It looks like this medicine is safe to be taken</textarea>
									<h3>Severity</h3>
									<textarea id="inter_severe" cols="80" rows="8" disabled  style="background-color:#ffffff">Ooops It looks like this medicine is safe to be taken</textarea>										
									`);
								
							} else {

								$('#main').append(`
								<h3 class="card-title">Drug interaction can cause you this</h3>
								<textarea id="inter_desc" cols="80" rows="8" disabled  style="background-color:#ffffff">${response.fullInteractionTypeGroup[0].fullInteractionType[0].interactionPair[0].description}</textarea>
								<h3>Severity</h3>
								<textarea id="inter_severe" cols="80" rows="8" disabled  style="background-color:#ffffff">${response.fullInteractionTypeGroup[0].fullInteractionType[0].interactionPair[0].severity}</textarea>										
								`);
								
								leftImages('rxcui1Images',mdcn1,rxcui1Images,0, addSelect(mdcn1,brandedMdcn1));
								rightImages('rxcui2Images',mdcn2,rxcui2Images,0, addSelect(mdcn2,brandedMdcn2));

								$('#rxcui1Images').click(function(){
									var id =  $(this).find('i').text();
									console.log('from card 1',id);
									replaceImage('rxcui1Images',mdcn1,rxcui1Images,parseInt(id));
								});
							
								
								$('#rxcui2Images').click(function(){
									var id = $(this).find('i').text();
									console.log('from card 2', id);
									replaceImage('rxcui2Images',mdcn2,rxcui2Images,parseInt(id));
								});

							}
								// <input type="text" id="inter_severe" value="${response.fullInteractionTypeGroup[0].fullInteractionType[0].interactionPair[0].severity}">
								// <input type="text" id="inter_desc" value="${response.fullInteractionTypeGroup[0].fullInteractionType[0].interactionPair[0].description}">						
						},
						complete:function(){
							$('.no-content').remove();
							const interDesc = $('#inter_desc').val();
							const interSevere = $('#inter_severe').val();
						
							sessionStorage.setItem("DESC",interDesc);
							sessionStorage.setItem("SEVERITY",interSevere);
						},
				});


			}
		});
	}); //fetch3


	function getImages(med,thecollection){
		
		$.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
        {
          tags: med,
          tagmode: "any",
          format: "json"
        },
        function(data) {
          $.each(data.items, function(i,item){
			thecollection.push(item.media.m);
            if ( i == 10 ) return false;
          });
        });

		return thecollection;
	}

	function leftImages(name,medname,imagearray, id, dynamicSelect){
		$('#rximages').empty();
		var accessIndex = parseInt(id);
		accessIndex += 1;
		console.log(imagearray[accessIndex]);
		$('.rximages').html('<h4>Related Images : '+medname+'<h4><div class="card" style="width:200px;" id="'+name+'">'+
		'<img class="card-img-top" src="'+imagearray[accessIndex]+'" alt="Card image cap">'+
		'<div class="card-body"><h5 class="card-title">'+ medname +'</h5>'+
		'<button class="btn btn-primary leftImages">View Next <i>'+accessIndex+'</i></button>'+
		'</div></div><div>'+dynamicSelect+'</div>');
	}


	function rightImages(name,medname,imagearray,id, dynamicSelect){
		$('#rightimages').empty();
		var accessIndex = parseInt(id);
		accessIndex += 1;
		$('.rightimages').html('<h4>Related Images : '+medname+'<h4><div class="card" style="width:200px;" id="'+name+'">'+
		'<img class="card-img-top" src="'+imagearray[accessIndex]+'" alt="Card image cap">'+
		'<div class="card-body"><h5 class="card-title">'+ medname +'</h5>'+
		'<button class="btn btn-primary leftImages">View Next <i>'+accessIndex+'</i></button>'+
		'</div></div><di>'+dynamicSelect+'</div>');
	}

	function addSelect(medname,medicines){
		// console.log(medicines,"medicines from addselect");
		var selectContent = '<h4>Available Branded Drugs : '+medname+'</h4><select class="custom-select" size="10"><option selected>'+medname+'</option>';

		$.each(medicines, function(key,value){
			selectContent += '<option>'+value+'</option>';
		});

		selectContent += '</select>';

		// console.log(selectContent);
		return selectContent;
	}


	function replaceImage(name,medname,imagearray,id){
		var accessIndex = parseInt(id);
		accessIndex += 1;

		if(imagearray[accessIndex] == undefined){
			$('#'+name+'').css('pointer-events','none');
			$('#'+name+'').find('button').text('No more Images');
			$('#'+name+'').find('button').text('No more Images');
		} else {
			$('#'+name+'').find('img').attr('src', imagearray[accessIndex]);
			$('#'+name+'').find('i').text(accessIndex);
		}
		
	}


	function getRelatedMedicine(medname){
		var brandedDrugs = [];
		$.get({
			url: 'https://rxnav.nlm.nih.gov/REST/drugs.json?name='+medname+'&SAB=RXNORM&SUPPRESS=N',
			dataType: 'json',
			success:function(data){
				$.each(data.drugGroup.conceptGroup, function(key,value){
					if(value.tty == "SBD"){
						// console.log(value,"SBD");
						$.each(value.conceptProperties, function(key,value){
							brandedDrugs.push(value.synonym);
						})
					}
				});
			},
		});

		return brandedDrugs;
	}


	var availableDrugs = [];

	$.ajax({
		type:'GET',
		url: '/getalldrugs',
		success:function(data){
			$.each(data, function(key,value){
				$.each(value,function(key,val){
					if(!availableDrugs.includes(val)){
						availableDrugs.push(val);
					}
				});
			});

			console.log(availableDrugs);
		},
	});

	$( "#medicine1" ).autocomplete({
		source: availableDrugs,
		autoFocus:true,
		select: function (event, ui) {
			// Set selection
			$('#medicine1').val(ui.item.label); // display the selected text
			return false;
		}
	});

	$( "#medicine2" ).autocomplete({
		source: availableDrugs,
		autoFocus:true,
		select: function (event, ui) {
			// Set selection
			$('#medicine2').val(ui.item.label); // display the selected text
			return false;
		}
	});
});

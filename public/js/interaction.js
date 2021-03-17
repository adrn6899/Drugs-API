
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
	var rxcui1Images = [];
	var rxcui2Images = [];
	
	$("#fetch3").click(function(e){
		var mdcn1 = document.getElementById("medicine1").value;
		var mdcn2 = document.getElementById("medicine2").value;
		console.log(mdcn1,mdcn2);
		var rxcui1;
		var rxcui2;
		e.preventDefault();
		$('#main').html('');
		$('#rximages').empty();

		getImages(mdcn1,rxcui1Images);
		getImages(mdcn2,rxcui2Images);
		
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
								
								nextImage('rxcui1Images',mdcn1,rxcui1Images,0);
								nextImage('rxcui2Images',mdcn2,rxcui2Images,0);

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
							const interDesc = $('#inter_desc').val();
							const interSevere = $('#inter_severe').val();
						
							sessionStorage.setItem("DESC",interDesc);
							sessionStorage.setItem("SEVERITY",interSevere);

						},
				});


			}
		});
	}); //fetch3


	// $('#showimage').click(function(e){
	// 	e.preventDefault();

	// 	console.log(rxcui1Images);
	// 	console.log(rxcui1Images[0]);

	// 	nextImage(mdcn1,rxcui1Images,0)

	// 	console.log(rxcui2Images);
	// })

	// $('.rximages').on('click','.nextimages',function(e){
	// 	e.preventDefault();
	// 	var id = $(this).data('id');
	// 	var whois = $('[data-id="'+id+'"]').find('i').text();
	// 	console.log(id, ' from ' + whois);
	// 	// nextImage(mdcn1,rxcui1Images, id);
	// });



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

	function nextImage(name,medname,imagearray, id){
		$('#rximages').empty();
		var accessIndex = parseInt(id);
		accessIndex += 1;
		console.log(imagearray[accessIndex]);
		$('.rximages').append('<div class="card" style="width:200px;" id="'+name+'">'+
		'<img class="card-img-top" src="'+imagearray[accessIndex]+'" alt="Card image cap">'+
		'<div class="card-body"><h5 class="card-title">'+ medname +'</h5>'+
		'<button class="btn btn-primary nextimages">View Next <i>'+accessIndex+'</i></button>'+
		'</div></div>');
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

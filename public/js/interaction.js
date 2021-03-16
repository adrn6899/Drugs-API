
$(document).ready(function(){
	
	$("#fetch3").click(function(e){
		var mdcn1 = document.getElementById("medicine1").value;
		var mdcn2 = document.getElementById("medicine2").value;
		console.log(mdcn1,mdcn2);
		var rxcui1;
		var rxcui2;
		e.preventDefault();
		$('#main').html('')
		$.ajax({
			type: 'GET',
			url: 'https://rxnav.nlm.nih.gov/REST/rxcui.json?name=' +  mdcn1,
			success: function (response){
				rxcui1 = response.idGroup.rxnormId;
				console.log(rxcui1 + " meron rxcui 1")
			}
		})
		$.ajax({
			type: 'GET',
			url: 'https://rxnav.nlm.nih.gov/REST/rxcui.json?name=' +  mdcn2,
			success: function(response){
				rxcui2 = response.idGroup.rxnormId;
				console.log(rxcui2 + " meron rxcui 2");

				$.ajax({
					type: 'GET',
					url:'https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis='+ rxcui1 +'+'+ rxcui2,
					success: function (response){
							console.log(response);

							if(response.fullInteractionTypeGroup == null)
							{
								$('#main').append(`
									<h3 class="card-title">Drug interaction can cause you this</h3>
									<textarea id="inter_desc" cols="80" rows="8" disabled  style="background-color:#ffffff">No interaction found , Ooops It looks like this medicine is safe to be taken</textarea>
									<h3>Severity</h3>
									<textarea id="inter_severe" cols="80" rows="8" disabled  style="background-color:#ffffff">Ooops It looks like this medicine is safe to be taken</textarea>										
									`)
							} else {
								console.log(response.fullInteractionTypeGroup[0].fullInteractionType[0].interactionPair[0].description)
								$('#main').append(`
								<h3 class="card-title">Drug interaction can cause you this</h3>
								<textarea id="inter_desc" cols="80" rows="8" disabled  style="background-color:#ffffff">${response.fullInteractionTypeGroup[0].fullInteractionType[0].interactionPair[0].description}</textarea>
								<h3>Severity</h3>
								<textarea id="inter_severe" cols="80" rows="8" disabled  style="background-color:#ffffff">${response.fullInteractionTypeGroup[0].fullInteractionType[0].interactionPair[0].severity}</textarea>										
								`)
							}
								// <input type="text" id="inter_severe" value="${response.fullInteractionTypeGroup[0].fullInteractionType[0].interactionPair[0].severity}">
								// <input type="text" id="inter_desc" value="${response.fullInteractionTypeGroup[0].fullInteractionType[0].interactionPair[0].description}">
							
						},
						complete: function(){
							const interDesc = $('#inter_desc').val();
                            const interSevere = $('#inter_severe').val();
                            sessionStorage.setItem("DESC",interDesc);
                            sessionStorage.setItem("SEVERITY",interSevere); 
						}
				});


			}
		});
	});
});


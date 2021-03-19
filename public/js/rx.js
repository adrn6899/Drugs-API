$(document).ready(function(){

	$("#fetch2").click(function(e){
		e.preventDefault();
		// var rxcui = document.getElementById("rxc").value;
		var rxcui = $('#rxc').val();
		console.log(rxcui);
		$('#main').html('')

		$.ajax({
			type: 'GET',
			url: 'https://rxnav.nlm.nih.gov/REST/rxcui.json?name='+rxcui,
			success: function(response){
				var rxid = response.idGroup.rxnormId;
				console.log(rxid)
				$.ajax({
					type: 'GET',
					url: 'https://rxnav.nlm.nih.gov/REST/rxcui/'+ rxid +'/historystatus.json?caller=RxNav',
					success: function(response){
						console.log(response);

						$('#main').append(`
						<div class="card" style="width:100%;">
						<div class="card-header">
							Showing medicinal details for <strong>${rxcui}</strong>
						</div>
						<ul class="list-group list-group-flush">
							<li class="list-group-item">
									<label>Medicine is branded or not ? </label>
									<input type="text" id="is_branded" value="${response.rxcuiStatusHistory.attributes.isBranded}" style="margin-left: 30px;" disabled><br>
							</li>
							<li class="list-group-item">	
									<label>The drug/medicine name </label>
									<input type="text" id="med_name" value="${response.rxcuiStatusHistory.attributes.name}" style="margin-left: 60px;" disabled><br>
							</li>
							<li class="list-group-item">
									<label>RXCUI number indentifier</label>
									<input type="text" id="rxcui_id" value="${response.rxcuiStatusHistory.attributes.rxcui}" style="margin-left: 55px;" disabled>
							</li>
						</ul>
						</div>`)

						
					},
					complete: function(){
						const branded = $('#is_branded').val();
				        const medName = $('#med_name').val();
				        const rxcui = $('#rxcui_id').val();
						sessionStorage.setItem('RX_SEARCH', $('#rxc').val());
				        sessionStorage.setItem("BRAND_NAME",branded);
				        sessionStorage.setItem("MED_NAME",medName);
				        sessionStorage.setItem("RXCUI",rxcui);
					}
				})
			}
		})
	});
});

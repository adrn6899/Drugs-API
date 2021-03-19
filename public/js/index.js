
$(document).ready(function(){
	
	$("#fetch1").click(function(e){
		var mdcn = document.getElementById("medicine").value;
		e.preventDefault();
		$('#main-left').html('')
		$.ajax({
			type: 'GET',
			url: 'https://api.fda.gov/drug/label.json?api_key=VwV6GVBKrGlTQQ1cI7CdFwzgKRwttF4hHdRz5HpX&search=drug_label=' + mdcn,
			success: function (response){
				console.log(response)
						if(!response.results[0].openfda.brand_name){
								$('#main-left').append(`
		                            <div>
										<div>
											<p class="card-text" style="padding-left: 5px;">
					                            <label>Brand Name: </label><br>
					                            <input type="text" id="b_name" value="No Brand Name Available" disabled  style="background-color:#ffffff"><br>
					                        </p>
		                        		</div>
									</div>`)

							}

							else{
								$('#main-left').append(`
		                            <div>
										<div>
											<p class="card-text" style="padding-left: 5px;">
					                            <label>Brand Name: </label><br>
					                            <input type="text" id="b_name" value="${response.results[0].openfda.brand_name}" disabled  style="background-color:#ffffff"><br>
					                        </p>
		                        		</div>
									</div>`)
							}
							// console.log(b_name)
							if(!response.results[0].openfda.generic_name){
								$('#main-left').append(`
		                            <div>
										<div>
											<p class="card-text" style="padding-left: 5px;">
					                            <label>Brand Name: </label><br>
					                            <input type="text" id="g_name" value="No Generic Name Available" disabled  style="background-color:#ffffff"><br>
					                        </p>
		                        		</div>
									</div>`)

							}
							else{
								$('#main-left').append(`
		                            <div>
										<div>
											<p class="card-text" style="padding-left: 5px;">
					                            <label>Brand Name: </label><br>
					                            <input type="text" id="g_name" value="${response.results[0].openfda.generic_name}" disabled  style="background-color:#ffffff"><br>
					                        </p>
		                        		</div>
									</div>`)
							}
						if(!response.results[0].description){
							$('#main-left').append(`
	                            <div>
									<div>
										<p class="card-text" style="padding-left: 5px;">
				                            <label>Description: </label><br>
				                            <input type="text" id="d_desc" value="No Description Available" disabled  style="background-color:#ffffff"><br>
				                        </p>
	                        		</div>
								</div>`)

						}
						else{
							$('#main-left').append(`
	                            <div>
									<div>
										<p class="card-text" style="padding-left: 5px;">
				                            <label>Description: </label><br>
											<textarea id="d_desc" cols="80" rows="12" disabled  style="background-color:#ffffff">${response.results[0].description}</textarea>
											</p>
											</div>
											</div>`)
						}

						

						if (!response.results[0].ask_doctor){
							$('#main-left').append(`
	                            <div>
									<div>
										<p class="card-text" style="padding-left: 5px;">
				                            <label>Ask Doctor: </label><br>
											<textarea id="ask_d" cols="80" rows="12" disabled  style="background-color:#ffffff">Doctor's Approval is not needed</textarea>
											<br>
											<tre
											</p>
											</div>
											</div>`)
									}
				                            // <input type="text" id="ask_d" value="Doctor's Approval is not needed">
						else{
							$('#main-left').append(`
								<div>
									<div>
										<p class="card-text" style="padding-left: 5px;">
				                            <label>Ask Doctor: </label><br>
											<textarea id="ask_d" cols="80" rows="12" disabled  style="background-color:#ffffff">${response.results[0].ask_doctor}</textarea>
											<br>
											</p>
											</div>
											</div>`)
									}
				                            // <input type="text" id="ask_d" value="${response.results[0].ask_doctor}">
	                            	
					if (!response.results[0].dosage_forms_and_strengths){
							$('#main-left').append(`
	                            <div>
									<div>
										<p class="card-text" style="padding-left: 5px;">
				                            <label>Dosage forms and Strengths: </label><br>
											<textarea id="d_dos" cols="80" rows="8" disabled  style="background-color:#ffffff">No Dosage forms and Strengths Available</textarea>
											<br>
											</p>
											</div>
											</div>`)
									}
				                            // <input type="text" id="d_dos" value="No Dosage forms and Strengths Available">
						else{
							$('#main-left').append(`
								<div>
									<div>
										<p class="card-text" style="padding-left: 5px;">
				                            <label>Dosage forms and Strengths: </label><br>
											<textarea id="d_dos" cols="80" rows="8" disabled  style="background-color:#ffffff">${response.results[0].dosage_forms_and_strengths}</textarea>
											<br>
											</p>
											</div>
											</div>`)
									}
				                            // <input type="text" id="d_dos" value="${response.results[0].dosage_forms_and_strengths}">

					if (!response.results[0].pregnancy){
							$('#main-left').append(`
	                            <div>
									<div>
										<p class="card-text" style="padding-left: 5px;">
				                            <label>Pregnancy: </label><br>
											<textarea id="d_preg" cols="80" rows="8" disabled  style="background-color:#ffffff">Safe for pregnants</textarea>
											<br>
											</p>
											</div>
											</div>`)
									}
				                            // <input type="text" id="d_preg" value="Safe for Pregnants">
						else{
							$('#main-left').append(`
								<div>
									<div>
										<p class="card-text" style="padding-left: 5px;">
				                            <label>Pregnancy: </label><br>
											<textarea id="d_preg" cols="80" rows="8" disabled  style="background-color:#ffffff">${response.results[0].pregnancy}</textarea>
											<br>
											</p>
											</div>
											</div>`)
									}
				                            // <input type="text" id="d_preg" value="${response.results[0].pregnancy}">
					// const brand = document.getElementById('b_name').value;
		   //          const generic = document.getElementById('g_name').value;
		   //          const desc = document.getElementById('d_desc').value;
		   //          const ask = document.getElementById('ask_d').value;
		   //          const dosage = document.getElementById('d_dos').value;
		   //          const preggy = document.getElementById('d_preg').value;
		   //          sessionStorage.setItem("BRANDED",brand);
		   //          sessionStorage.setItem("GENERIC",generic);
		   //          sessionStorage.setItem("DESCRIPTION",desc);
		   //          sessionStorage.setItem("ASKED",ask);
		   //          sessionStorage.setItem("DOSAGE",dosage);
		   //          sessionStorage.setItem("PREGNANT",preggy);
			},
			complete:function(){
                const brand = $('#b_name').val();
                const generic = $('#g_name').val();
                const desc = $('#d_desc').val();
                const ask = $('#ask_d').val();
                const dosage = $('#d_dos').val();
                const preggy = $('#d_preg').val();
				sessionStorage.setItem("FDA_SEARCH",mdcn);
                sessionStorage.setItem("BRANDED",brand);
                sessionStorage.setItem("GENERIC",generic);
                sessionStorage.setItem("DESCRIPTION",desc);
                sessionStorage.setItem("ASKED",ask);
                sessionStorage.setItem("DOSAGE",dosage);
                sessionStorage.setItem("PREGNANT",preggy);   
            }
		})
	});
});
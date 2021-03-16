function handleSubmit(){
	const branded = document.getElementById('is_branded').value;
	const medName = document.getElementById('med_name').value;
	const rxcui = document.getElementById('rxcui_id').value;

    sessionStorage.setItem("BRAND_NAME",branded);
	sessionStorage.setItem("MED_NAME",medName);
	sessionStorage.setItem("RXCUI",rxcui);

}
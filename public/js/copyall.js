function handleSubmit(){

	const brand = document.getElementById('b_name').value;
	const generic = document.getElementById('g_name').value;
	const desc = document.getElementById('d_desc').value;
	const ask = document.getElementById('ask_d').value;
	const dosage = document.getElementById('d_dos').value;
	const preggy = document.getElementById('d_preg').value;

	console.log(brand);
	console.log(generic);
	console.log(desc);
	console.log(ask);
	console.log(dosage);
	console.log(preggy);

	sessionStorage.setItem("BRANDED",brand);
	sessionStorage.setItem("GENERIC",generic);
	sessionStorage.setItem("DESCRIPTION",desc);
	sessionStorage.setItem("ASKED",ask);
	sessionStorage.setItem("DOSAGE",dosage);
	sessionStorage.setItem("PREGNANT",preggy);

}
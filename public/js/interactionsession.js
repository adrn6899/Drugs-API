function handleSubmit(){
	const interDesc = document.getElementById('inter_desc').value;
	const interSevere = document.getElementById('inter_severe').value;

    sessionStorage.setItem("DESC",interDesc);
	sessionStorage.setItem("SEVERITY",interSevere);
}
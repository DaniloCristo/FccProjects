document.getElementById("converter").addEventListener("click",function(){
	//recebendo o input
	let input = parseInt(document.getElementById("horas").value)
	//convertendo os inputs
	let minutosConvertidos = input * 60;
	let segundosConvertidos = minutosConvertidos * 60;
	document.getElementById("minutos").value = minutosConvertidos;
	document.getElementById("segundos").value = segundosConvertidos;
});
document.getElementById("converter").addEventListener("click",function(){
	//pegando o input e convertendo para inteiro
	let input = parseInt(document.getElementById("dias").value)
	//usando operações para converter o input em dias e retornalo com os valores desejados
	let horas = input * 24
	let minutos = horas * 60
	let segundos = minutos * 60
	document.getElementById("horas").value = horas 
	document.getElementById("minutos").value = minutos
	document.getElementById("segundos").value = segundos
});
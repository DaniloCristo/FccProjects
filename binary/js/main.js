document.getElementById("converter").addEventListener("click",function(){
	// pegando o input do usuario ( valor decimal )
	let input = document.getElementById("decimal").value
	// separando a parte inteira e a decimal
	let i = parseInt(input)
	let d = parseFloat(input) - i
	parteInteira = intToBinary(i)
	parteDecimal = decimalToBinary(d)
	//usando o ponto para separar a parte decimal da parte inteira
	result = parteInteira + "." + parteDecimal
	document.getElementById("resultado_binario").value = result
});

function intToBinary(i){

	/* 
		i : valor inteiro
		retorna: seu correspondente valor binario

	*/
	//tratando numero negativo
	let negativo
	if(i < 0){
		negativo = true
	}

	if(i == 0){
		return 0
	}
	result = ""

	//logica para pegar o valor binario
	while(i > 0){
		resto = i % 2
		result = resto.toString() + result
		i = Math.trunc(i/2) 
	}

	if(negativo){
		result = "-" + result
	}

	return result
}

function decimalToBinary(d){
	/*
		d: valor decimal
		retorna: seu correspondente em binario
	*/
	//logica para conversão
	let parteInteira
	let result = ""

	//multiplicar a parte decimal até que seja 0
	while(d > 0){
		d = d * 2
		parteInteira = parseInt(d)
		d = d - parteInteira
		result = result + parteInteira.toString()
	}

	return result
}
$(document).ready(function(){
	
	let val = "";
	let n1 = 0;
	let n2 = 0;
	let result = 0;
	let operacao;

	//funções das operações
	function somar(n1,n2){
		return n1 + n2;
	}

	function sub(n1,n2){
		return n1 - n2
	}

	function multi(n1,n2){
		return n1 * n2;
	}

	function div(n1,n2){
		return n1 / n2
	}

	function potencia(n1,n2){
		return Math.pow(n1,n2);
	}
	function sqrt(n1){
		return Math.sqrt(n1);
	}
	//capturando o clique dos numeros
	$("#9").click(function(){
		val += "9" 
		$("#num").val(val);
	});
	$("#8").click(function(){
		val += "8"
		$("#num").val(val);
	});
	$("#7").click(function(){
		val += "7"
		$("#num").val(val)
	})
	$("#6").click(function(){
		val += "6"
		$("#num").val(val)
	})
	$("#5").click(function(){
		val += "5"
		$("#num").val(val)
	})
	$("#4").click(function(){
		val += "4"
		$("#num").val(val)
	})
	$("#3").click(function(){
		val += "3"
		$("#num").val(val)
	})
	$("#2").click(function(){
		val += "2"
		$("#num").val(val)
	})
	$("#1").click(function(){
		val += "1"
		$("#num").val(val)
	})
	$("#0").click(function(){
		val += "0"
		$("#num").val(val)
	})
	$("#ponto").click(function(){
		val += ".";
		$("#num").val(val);
	});

	//clique do botão de somar
	$("#somar").click(function(){
		operacao = 1;
		val = ""
		n1 += parseFloat($("#num").val())
		$("#resultado_parcial").text(n1);
		$("#num").val("");
	});

	//clique no botão de subtração
	$("#subtrair").click(function(){
		operacao = 2
		val = "";
		n1 += parseFloat($("#num").val());
		$("#resultado_parcial").text(n1);
		$("#num").val("");
	});
	//mutiplicação
	$("#multiplicar").click(function(){
		operacao = 3
		val = "";
		n1 += parseFloat($("#num").val())
		$("#resultado_parcial").text(n1);
		$("#num").val("");
	});
	//divisão
	$("#dividir").click(function(){
		operacao = 4;
		val = ""
		n1 += parseFloat($("#num").val())
		$("#resultado_parcial").text(n1);
		$("#num").val("");
	});
	//potenciação
	$("#potencia").click(function(){
		operacao = 5
		val = ""
		n1 += parseFloat($("#num").val())
		$("#resultado_parcial").text(n1);
		$("#num").val("")
	});

	$("#sqrt").click(function(){
		val = "";
		n1 = parseFloat($("#num").val()); 
		result = sqrt(n1)
		$("#num").val(result);
	});

	//baseado em qual operacao fazer executar a sua devida função
	$("#resultado").click(function(){
		n2 = parseFloat($("#num").val());
		switch(operacao){
			case 1:
				result = somar(n1,n2)
				break;
			case 2:
				result = sub(n1,n2)
				break;
			case 3:
				result = multi(n1,n2)
				break;
			case 4:
				result = div(n1,n2);
				break;
			case 5:
				result = potencia(n1,n2);
				break;				
		}
		$("#resultado_parcial").text("...");
		$("#num").val(result);
	});

	
	//limpar todas as variaveis
	$("#clear").click(function(){
		val = "";
		n1 = 0;
		n2 = 0;
		$("#num").val("");
	});

});
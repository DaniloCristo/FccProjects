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
		n1 += parseInt($("#num").val())
		$("#num").val("");
	});

	//clique no botão de subtração
	$("#subtrair").click(function(){
		operacao = 2
		val = "";
		n1 += parseInt($("#num").val());
		$("#num").val("");
	});

	$("#resultado").click(function(){
		n2 = parseInt($("#num").val());
		switch(operacao){
			case 1:
				result = somar(n1,n2)
				break;
			case 2:
				result = sub(n1,n2)
				break;	
		}
		$("#num").val(result);
	});

	

});
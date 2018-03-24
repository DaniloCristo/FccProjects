$(document).ready(function(){

	$.getJSON("https://api.myjson.com/bins/n8sdj",function(data){
		let acertos = 0;
		//quantidade de perguntas
		let qtdPerguntas = acertos + "/" + data.Math.length;
		$("#pontuacao").html(qtdPerguntas);
		console.log(data.Math.length)
		//primeira pergunta
		let i = 0;
		$("#pergunta").html(data.Math[i].Pergunta)

		$("#checar").click(function(){
				
				let input = $("#resposta").val();
				console.log(i);
				if(input == data.Math[i].Resposta){
					//aumentando o contador das perguntas
					i++
					acertos++;
					//alterando seus acertos 
					qtdPerguntas = acertos + "/" + data.Math.length;
					$("#pontuacao").html(qtdPerguntas);

					//alterar pergunta apenas se o I corresponder ao um index valido no json de perguntas
					if(i < data.Math.length){

						$("#pergunta").html(data.Math[i].Pergunta)		
					}
					
				}else if (input !== data.Math[i].Resposta){
					alert("Você errou, tente novamente");
				}

				if(acertos == 12){
					alert("Parabéns, você compĺetou o quiz");
				}

			});

	});

});


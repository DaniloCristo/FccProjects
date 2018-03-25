$(document).ready(function(){

	$.getJSON("https://api.myjson.com/bins/1et5on",function(data){
		let acertos = 0;
		let erros = 0;
		//pegar os erros cometidos pela sua categoria
		let errosCategoria = Array();
		//quantidade de perguntas
		let qtdPerguntas = acertos + "/" + data.Math.length;
		$("#pontuacao").html(qtdPerguntas);
		console.log(data.Math.length)
		//primeira pergunta
		let i = 0;
		$("#pergunta").html(data.Math[i].Pergunta)

		$("#checar").click(function(){
				
				let input = $("#resposta").val();
				console.log(errosCategoria);
				if(input == data.Math[i].Resposta){
					//aumentando o contador das perguntas
					i++
					acertos++;
					$("#errou").html("");
					//limpando o input
					$("#resposta").val("");
					//alterando seus acertos 
					qtdPerguntas = acertos + "/" + data.Math.length;
					$("#pontuacao").html(qtdPerguntas);

					//alterar pergunta apenas se o I corresponder ao um index valido no json de perguntas
					if(i < data.Math.length){

						$("#pergunta").html(data.Math[i].Pergunta)		
					}
					
				}else if (input !== data.Math[i].Resposta){
					erros++
					//caso erre a resposta
					$("#errou").html("Resposta incorreta");
					//populando o array com a categoria do erro (uma vez apenas)
					if($.inArray(data.Math[i].Categoria,errosCategoria)){
						errosCategoria.push(data.Math[i].Categoria);
					}
				}


				if(acertos == 12){
					alert("Parabéns, você compĺetou o quiz");
				}

			});

	});

});


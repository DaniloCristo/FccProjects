$(document).ready(function(){
	//função que vai receber uma array e um valor e verficar se o valor contem no array
	function in_array(arr,value){
		let igual = false;
		//loop em cada item do array
		for(let i = 0; i < arr.length; i++){
			//caso ache uma igualdade deixa a variavel true
			if(arr[i] === value){
				igual = true;
			}
		}
		//caso em nenhum momento a variavel tenha se tornado true ( caso nenhum item do array foi igual ao valor passado )
		if(!igual){
			//colocar o determinado valor dentro do array
			arr.push(value);
		}
	}
	//pegando o json
	$.getJSON("https://api.myjson.com/bins/1b4ai7",function(data){
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
					in_array(errosCategoria, data.Math[i].Categoria);
				}


				if(acertos == 12){
					alert("Parabéns, você compĺetou o quiz");
					//exibindo botão de diagnostico após terminar o quiz
					$("#diagnostico").show();
					//criando uma listagem com as categorias dos erros cometidos
					let lista = "<ul class='list-group'>";
					for(let i = 0; i < errosCategoria.length; i ++){
						lista += "<li class='list-group-item'>"+errosCategoria[i]+"</li>";
					}
					lista += "</ul>";
					$("#lista").html(lista);
				}

			});

	});

});



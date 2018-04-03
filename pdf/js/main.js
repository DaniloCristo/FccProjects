	$(document).ready(function(){	
		let fileName;
		$("#genPdf").hide();
		$("#gerarhtml").click(function(){
			//recebendo o input
			let palavra = $("#nome").val();
			console.log(palavra);
			//definindo o nome do arquivo
			fileName = palavra+".pdf";

			let html = "<h1>"+palavra+"</h1>"
			//criando o html com os underscore para preencher
			let arr = palavra.split("");
			console.log(arr);
			html += "<div id='genPdf'>";
			for(let i = 0; i < arr.length; i++){
				if(arr[i] !== " "){
					arr[i] = "__ ";
					html += "<p>"+arr.join("")+"</p>";
				}
			}
			//exibindo o botão para gerar pdf
			$("#genPdf").show();
			//enviando pro html
			$("#pdfAqui").html(html)
		});
		/*
		//gerando pdf a partir do html				
		$("#genPdf").click(function(){
			let doc = new jsPDF();
			doc.fromHTML($("#pdfAqui").get(0),20,40,{
				"width":500
			});
			doc.save(fileName);
		});	*/


        $("#genPdf").click(function(event) {
            $(document).googoose({
                 area: '#pdfAqui'
         });
       
    });

	}); // fim do jquery
$(document).ready(function(){
 $("#btn_buscar").click(function(){
   
				var apiURL = "https://en.wikipedia.org/w/api.php?callback=?"
				//requisição para a api da wikipedia, pegando conteudo, url e conteudo
				 $.getJSON(apiURL, {
			        action: 'query',
			        format: 'json',
			        inprop: "url",
			        formatversion: 2,
			        generator: 'search', 
			        gsrsearch: $("input").val(),
			        prop: 'extracts|info', 
			        exsentences: 3,
			        exintro: "",
			        explaintext: "",        
			        
			      },function(data){
            
            //guardando o length do array de paginas retornadas na busca
           var array = data.query.pages.length;
           console.log(array);
           //criando uma div
           var div = "";
           //loop nas paginas para exibir no html
           for(var i = 0; i<array; i++ ){
           	//exibindo através de divs, h2 e uma tag a para ir para o conteudo na wikipedia
              div += "<div class='center'>"
            div +="<h2><a href='"+data.query.pages[i].canonicalurl+"' target='_blank' >"+ data.query.pages[i].title+"</a></h2>";
             div += "<p>"+data.query.pages[i].extract+"</p>";
             div += "</div>";

             //enviando cada resultado como uma div para o html
            $("#resultado").html(div);
           }
            
         });
 });
});
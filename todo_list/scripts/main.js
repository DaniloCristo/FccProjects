let items = []
document.getElementById("btn_adicionar").addEventListener("click", function(){
	let item = document.getElementById("item").value
	items.push(item)
	criarVisualizacao(items)

});

function getIndex(){
	$(".deletar_item").click(function(){
		let index = $(this).attr("data_id-item")
		//console.log(index)
		deletarItem(index)
		console.log(items)
	});
}	

function criarVisualizacao(arr){
	/* 
	arr: lista de itens adicionados ao afazeres
	retorna: uma visualização utilizando html para criar uma lista de itens com cada item do array	
	 */
	html = "<ul class='list-group'>"
		for(let i = arr.length - 1; i >=0; i--){
			html += "<li class='list-group-item'>"+arr[i]+"<button class='deletar_item btn btn-sm btn-danger' data_id-item='"+i+"'>Excluir</button></li>"
		}
	html += "</ul>"
	document.getElementById("itens").innerHTML = html
	getIndex()
}

function deletarItem(index){
	items.splice(index,1)
	criarVisualizacao(items)
}

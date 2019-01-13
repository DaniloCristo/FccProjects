display();
//objeto que os afazeres serão guardados
var localStorage = window.localStorage;

//adicionar item
document.getElementById("btn_adicionar").addEventListener("click", function(){
	let item = document.getElementById("item").value;

	post(item);
	display();
});

function getIndex(){
	/* 
	pegar o index do elemento que esta no botão (atributo data_id-tem)
	e chamar a função deletarItem(index) para deletar o item
	*/
	$(".deletar_item").click(function(){
		let index = $(this).attr("data_id-item")
		//console.log(index)
		deletarItem(index)
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
	/*
	deletar o item que se encontra no index escolhido
	*/
	items.splice(index,1)
	criarVisualizacao(items)
}

function post(item) {
	localStorage.setItem("todo" + localStorage.length, item);
}

function get() {
	let items = []
	for (let i = 0; i < localStorage.length; i++) {
		if (localStorage["todo" + i] != undefined) {
			items.push(localStorage["todo" + i])
		}
	}
	return items;
}

function remove(id) {
	this.getAttribute("data-id")
}

function display() {
	arr = get();
	html = "<ul class='list-group'>"
	for(let i = arr.length - 1; i >=0; i--){
		html += "<li class='list-group-item'>"+arr[i]+"<button class='deletar_item btn btn-sm btn-danger' data-id='"+i+"'>Excluir</button></li>"
	}
	html += "</ul>"
	document.getElementById("itens").innerHTML = html
}

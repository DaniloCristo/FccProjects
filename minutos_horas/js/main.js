document.getElementById("converter").addEventListener('click', function(){
    //pegando o input do usuario
    let min = document.getElementById("minutos").value;
    if(min < 0){
    	min = 0;
    }
    //pegando as horas
    hours = Math.floor(min/60);
    //pegando os minutos restantes
    min_restantes = min % 60;
    //adicionando um zero caso o valor seja menor que 10
    if(min_restantes < 10){
    	min_restantes = "0"+min_restantes;
    }
    if(hours < 10){
    	hours = "0"+hours;
    }
    //console.log("horas: "+hours);
    //console.log("Minutos: "+min_restantes);

    //enviando o resultado para os inputs
    document.getElementById("horas").value = hours;
    document.getElementById("minutos_restantes").value = min_restantes;
});
document.getElementById("converter").addEventListener("click",function(){
    //recebendo o input e o convertendo para inteiro
    let input = parseInt(document.getElementById("minutos").value)
    //convertendo o input para segundos
    let segundos = input * 60;
    document.getElementById("segundosConvertidos").value = segundos
});
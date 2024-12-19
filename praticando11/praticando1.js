window.onload = function() {
    let text;
    let nome = prompt("Qual o seu nome?");
    if(nome == null || nome == "") {
         alert("Prompt cancelado");
    } else {
       let sabejs = prompt("Olá " + nome + ". Você sabe JavaScript?");
       if(sabejs == "Sim" || sabejs == "sim" || sabejs == "s") {
        alert("Que bom que você ja sabe JS, " + nome + ". Agora, você vai aprender muito mais!");
       }else if(sabejs == "Não" || sabejs == "não" || sabejs == "n") {
        alert("Não tem problema, " + nome + ". Agora, você vai aprender!");
       }else if(sabejs == null || sabejs == ""){
        alert("Prompt cancelado");
       }
    }

   
};

//function myFuction(){
//    
//}
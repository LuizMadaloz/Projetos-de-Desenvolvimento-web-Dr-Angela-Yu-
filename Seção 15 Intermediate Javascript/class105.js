var convidados = ["ana","luiz","pedro","emily"];
name = prompt("Seu nome?").toLowerCase();
if (convidados.includes(name)){
    alert("Bem vindo")
}else{
    alert("Não está na lista")
}
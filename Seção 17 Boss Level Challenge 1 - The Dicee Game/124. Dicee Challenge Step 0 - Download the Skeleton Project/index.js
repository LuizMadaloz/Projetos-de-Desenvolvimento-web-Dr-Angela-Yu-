function sorteio (){
    var sorte = Math.floor(Math.random() * 6 +1);
    return sorte
    }
    

function dado (sorte){
    if(sorte===1){
        return "./images/dice1.png";
    }
     if(sorte===2){
        return "./images/dice2.png";
    }

     if(sorte===3){
        return "./images/dice3.png";
    }

     if(sorte===4){
        return "./images/dice4.png";
    }

     if(sorte===5){
        return "./images/dice5.png";
    }

     if(sorte===6){
        return "./images/dice6.png";
    }}

function valida(){
    var sortei1 = sorteio();
    var resultado1 = dado(sortei1);
    document.querySelector(".img1").setAttribute("src", resultado1);
    var sortei2 = sorteio();
    var resultado2 = dado(sortei2);
    document.querySelector(".img2").setAttribute("src", resultado2);
    var titulo =document.querySelector("h1");
    if(sortei1 === sortei2){
        titulo.innerHTML="Draw";

    }else if(sortei1 > sortei2){
        titulo.innerHTML="Player 1 win";
    }else{
        titulo.innerHTML="Player 2 win";
    }


}


var botao = document.querySelector('.botao');
botao.addEventListener('click', valida);
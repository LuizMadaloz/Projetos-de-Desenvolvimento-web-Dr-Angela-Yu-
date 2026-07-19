var qtdBotoes = document.querySelectorAll(".drum").length;
var listaSons =["crash","kick-bass","snare","tom-1","tom-2","tom-3","tom-4"  ];
var listaTeclas =["w","a","s","d","j","k","l"];


document.addEventListener("keydown", function(event){
     var teclaApertada = event.key.toLowerCase();
     for (let i = 0; i < qtdBotoes; i++){
    
            if (teclaApertada === listaTeclas[i]){
                var audio = new Audio('./sounds/' + listaSons[i] + '.mp3');
            audio.play();
             
            
            var botao = document.querySelectorAll(".drum")[i]; 
            botao.style.color="white";
            setTimeout(()=>{botao.style.color = "#DA0463";},300);
            break
        }

            
        };

});
   

    


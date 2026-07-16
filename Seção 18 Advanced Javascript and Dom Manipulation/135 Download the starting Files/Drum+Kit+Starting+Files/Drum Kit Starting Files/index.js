var qtdBotoes = document.querySelectorAll(".drum").length;
var listaSons =["crash","kick-bass","snare","tom-1","tom-2","tom-3","tom-4"   
]
for (let i = 0; i < qtdBotoes; i++){
        document.querySelectorAll(".drum")[i].addEventListener("click", function(){
            var audio = new Audio('./sounds/' + listaSons[i] + '.mp3');
            audio.play();

        });

    };


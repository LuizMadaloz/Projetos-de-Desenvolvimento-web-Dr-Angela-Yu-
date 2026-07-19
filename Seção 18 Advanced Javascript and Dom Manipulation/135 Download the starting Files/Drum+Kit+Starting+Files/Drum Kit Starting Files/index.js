var qtdBotoes = document.querySelectorAll(".drum").length;
var listaSons =["crash","kick-bass","snare","tom-1","tom-2","tom-3","tom-4"  ];
var listaTeclas =["w","a","s","d","j","k","l"];
for (let i = 0; i < qtdBotoes; i++){
        document.querySelectorAll(".drum")[i].addEventListener("keydown", function(){
            var teclaApertada = event.key.toLowerCase();
            if (teclaApertada === listaTeclas[i]){
            switch (teclaApertada) {
                case listaTeclas[i]:
                    var audio = new Audio('./sounds/' + listaSons[i] + '.mp3');
            audio.play();
                    break;
            
                default:
                    break;
            }}
            
            var cororiginal = this.style.color;
            this.style.color="white";
            setTimeout(()=>{this.style.color =cororiginal;},500);

            
        });

    };


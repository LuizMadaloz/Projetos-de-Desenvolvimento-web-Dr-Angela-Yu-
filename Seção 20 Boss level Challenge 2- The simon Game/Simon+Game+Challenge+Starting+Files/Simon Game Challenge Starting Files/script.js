let gamePattern =[];
let userClickedPattern = [];

function nextSequence(){
    const colores =['green', 'red', 'yellow', 'bluw'];
    let numberRandom = Math.floor(Math.random() * 4);
    gamePattern.push(colores[numberRandom]);
    //return playSound(colores[numberRandom]);
};

const buttonColours =["green", "red", "yellow", "blue" ];

let randomChosenColour = buttonColours[nextSequence()];

gamePattern.push(randomChosenColour);

function playSound(name){
    if (name === 'green'){
        let audio = new Audio("./sounds/green.mp3");
     audio.play();
     
  
    }else if(name === 'red'){
               let audio = new Audio("./sounds/red.mp3");
    audio.play();
   

    }else if(name === 'yellow'){
        let audio = new Audio("./sounds/yellow.mp3");
    audio.play();
    

    }else if (name === 'blue'){
        let audio = new Audio("./sounds/blue.mp3");
    audio.play();
    
    }
    $('#' + name).fadeTo(100, 0.33).fadeTo(100, 1);
    $('#' + name).addClass('pressed')
    let tempo = setTimeout(() => {
        $('#' + name).removeClass('pressed');
    }, 100);
    
};

$('.btn').click(function(event){
     let userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
     let idClick = this.id;
    return playSound(idClick);
})


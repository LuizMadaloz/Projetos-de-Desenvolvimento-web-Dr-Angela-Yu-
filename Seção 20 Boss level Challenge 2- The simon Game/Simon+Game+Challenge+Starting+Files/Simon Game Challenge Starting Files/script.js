let gamePattern =[];
let userClickedPattern = [];
let level = 0;
let trava = false

function nextSequence(){
    userClickedPattern = [];
    $('h1').text('level '+ level);
    level +=1;
    const colores =['green', 'red', 'yellow', 'blue'];
    let numberRandom = Math.floor(Math.random() * 4);
    gamePattern.push(colores[numberRandom]);
    playSound(colores[numberRandom]);
    

    
};

function playSound(name){
  
        let audio = new Audio("./sounds/" + name + ".mp3");
     audio.play();

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
    playSound(idClick);
    checkAnswer(userClickedPattern.length - 1);
})

$(document).keypress(function(){
    if(!trava){
    nextSequence();}
    trava = true;
})

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        if (gamePattern.length === userClickedPattern.length){
            setTimeout (()=>{nextSequence();}, 500);
        }
    }else{
        playSound("wrong");
        $("h1").text("Game over");
        setTimeout(() => {
            $('h1').text('Game Over, Press Any Key to Restart');
        }, 1000);
        $('body').addClass('game-over');
        setTimeout(() => {
            $('body').removeClass('game-over');
        }, 1000);
        iniciar();

    }

} 

function iniciar(){
    gamePattern =[];
    level = 0;
    trava = false
}



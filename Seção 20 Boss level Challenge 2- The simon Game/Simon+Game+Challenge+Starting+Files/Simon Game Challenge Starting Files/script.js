let gamePattern =[];
let 

function nextSequence(){
    let numberRandom = Math.floor(Math.random() * 4);
    return numberRandom;
};

const buttonColours =["green", "red", "yellow", "blue" ];

let randomChosenColour = buttonColours[nextSequence()];

gamePattern.push(randomChosenColour);

$("#green").on("click", function(){
     let audio = new Audio("./sounds/green.mp3");
     audio.play();
     $(this).fadeTo('fast', 0.33).fadeTo('fast', 1);
});

$("#red").on("click", function(){
    let audio = new Audio("./sounds/red.mp3");
    audio.play();
    $(this).fadeTo('fast', 0.33).fadeTo('fast', 1);
});

$("#yellow").on("click", function(){
    let audio = new Audio("./sounds/yellow.mp3");
    audio.play();
    $(this).fadeTo('fast', 0.33).fadeTo('fast', 1);
});

$("#blue").on("click", function(){
    let audio = new Audio("./sounds/blue.mp3");
    audio.play();
    $(this).fadeTo('fast', 0.33).fadeTo('fast', 1);
});

 $(".bnt").on('click',function(){
    let userChosenColour = $(this).attr("id")

})
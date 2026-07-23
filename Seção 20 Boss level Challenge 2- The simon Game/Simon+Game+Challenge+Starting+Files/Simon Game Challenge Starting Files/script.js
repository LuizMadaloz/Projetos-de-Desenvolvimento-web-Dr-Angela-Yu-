let gamePattern =[];

function nextSequence(){
    let numberRandom = Math.floor(Math.random() * 4);
    return numberRandom;
};

const buttonColours =["green", "red", "yellow", "blue" ];

let randomChosenColour = buttonColours[nextSequence()];

gamePattern.push(randomChosenColour);


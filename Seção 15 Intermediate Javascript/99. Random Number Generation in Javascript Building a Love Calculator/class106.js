var flizz = []; 
var Number = 0; 

function flizzBuzz () {
    Number += 1; 
    
    if (Number % 3 === 0 && Number % 5 === 0) { 
        flizz.push("flizzbuzz");
    } else if (Number % 3 === 0) { 
        flizz.push("flizz");
    } else if (Number % 5 === 0) { 
        flizz.push("buzz"); 
    } else {
        flizz.push(Number);
    }
    
    console.log(flizz);}
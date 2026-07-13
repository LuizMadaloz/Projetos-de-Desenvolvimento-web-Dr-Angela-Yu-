var bear = 99
while(bear >= 1){
    var bebe = bear - 1;
    if (bear > 1){
    console.log( bear + " bottles of beer on the wall, "+bear+" bottles of beer" );
     console.log("Take one down and pass it around, "+ bebe  + " bottles of beer on the wall");
    }else if (bear ===1){
       console.log( "1 bottle of beer on the wall, 1 bottle of beer Take one down and pass it around, no more bottles of beer on the wall");
        console.log("No more bottles of beer on the wall, no more bottles of beer Go to the store and buy some more, 99 bottles of beer on the wall");


    }


    bear--;
}

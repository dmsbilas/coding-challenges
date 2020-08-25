var digiReverse = (digit) =>{
    var digitCount = 0;
    var arr = new Array();
    while(digit != 0){
        digitCount += 1;
        let lastDigit = digit % 10;
        digit = (digit - lastDigit)/10;
        arr.push(lastDigit);
    }
    var flippedDigit = 0;

    arr.map((value)=>{
        digitCount -= 1;
        flippedDigit += value*(10 ** digitCount);
    });

    console.log(flippedDigit);

};



digiReverse(441);


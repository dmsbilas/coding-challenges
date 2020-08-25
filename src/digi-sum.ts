var digiSum = (digit) =>{
    var sum = 0;
    while( digit !=0 ){
        let lastDigit = digit % 10 ;
        sum += lastDigit;
        digit = (digit - lastDigit)/10;
    }

    return sum;
};

//Getting input from command line
var cmdArg = process.argv.slice(2);
console.log( digiSum(cmdArg[0]) );
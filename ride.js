const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

function lateRide(n) {
    var hr = Math.round(n/60);
    var min = n%60;
        if(hr>=24) hr = 23;
    
    var hrFirstDigit = hr%10;
    var hrSecondDigit = Math.floor(hr/10);
    
    var minFirstDigit = min%10;
    var minSecondDigit = Math.floor(min/10);
    
    console.log ( hrFirstDigit+hrSecondDigit+minFirstDigit+minSecondDigit );
}



  readline.question(`Enter Minutes: `, (minutes) => {
    minutes = parseInt(minutes);
    lateRide(minutes);


    readline.close();
  });

  

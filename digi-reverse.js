var digiReverse = function (digit) {
    var digitCount = 0;
    var arr = new Array();
    while (digit != 0) {
        digitCount += 1;
        var lastDigit = digit % 10;
        digit = (digit - lastDigit) / 10;
        arr.push(lastDigit);
    }
    var flippedDigit = 0;
    arr.map(function (value) {
        digitCount -= 1;
        flippedDigit += value * (Math.pow(10, digitCount));
    });
    console.log(flippedDigit);
};
digiReverse(441);

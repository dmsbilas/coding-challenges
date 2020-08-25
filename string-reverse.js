var commandLineInput = process.argv.slice(2);
var inputString = commandLineInput[0];
var reverse = function (inputString) {
    var rvStr = "";
    var len = inputString.length;
    for (var i = len - 1; i >= 0; i--) {
        rvStr += inputString.charAt(i);
    }
    console.log(rvStr);
};
reverse("Abu Haider Siddiq");

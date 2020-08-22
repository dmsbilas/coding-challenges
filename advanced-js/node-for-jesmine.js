var Jasmine = require("jasmine");
var jasmine = new Jasmine();
jasmine.loadConfig({
    spec_dir: 'spec',
    spec_files: [
        '**/adder.spec.js'
    ]
});
jasmine.onComplete(function(passed) {
    if(passed) {
        console.log('All specs have passed');
    }
    else {
        console.log('At least one spec has failed');
    }
});
jasmine.configureDefaultReporter({
    showColors: false
});
jasmine.execute();

var Adder = function(a,b){
    return a+b;
}

var Square = function(val){
     return val*val; 
}


exports.Adder = Adder; 
exports.Square = Square;


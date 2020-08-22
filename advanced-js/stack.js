var bdd = require("./bdd");
bdd.run;

var Stack = function(){
    this.count = 0;
    this.storage = {};
}

Stack.prototype.push = function(elem){
    this.storage[this.count] = elem;
    this.count ++;
}

Stack.prototype.pop = function(){
    this.count --;
    if(this.count >= 0){
        let elem = this.storage[this.count];
        delete this.storage[this.count];
        return elem;
    }
}

exports.myStact = new Stack();



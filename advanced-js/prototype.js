var Car = function(color, model, number){
    this.color = color;
    this.model = model;
    this.number = number;
    this.getNumber = function(){
        return this.number;
    };
}

Car.prototype.getColor = function(){
    return this.color;
}

Car.prototype.setColor = function(color){
    this.color = color;
}

Car.prototype.setNumber = function(number){
    this.number = number;
}

Car.prototype.getNumber = function(){
    return this.getNumber();
}


var toyoCar = new Car("white", "1998", "7209");

toyoCar.setColor("blue");
toyoCar.setNumber("44444");
console.log( toyoCar.getColor() );

console.log(toyoCar.getNumber());


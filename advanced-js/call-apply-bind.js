// define a function
var myFunction = function (name) {
    name = this.name;
    return this.name+this.age;
  };
 
var myContext = {
    name: "Haider",
    age: 33
};
  // call it
 console.log( myFunction.call(myContext, "Bilas Siddiq") );

 
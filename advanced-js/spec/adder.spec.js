var adder = require("../node-for-jesmine");


describe("Add checking", ()=>{
    it("Checks if the function can add two numbers or not", ()=>{
        let testResult = adder.Adder(5,6);
        expect(testResult).toEqual(11);
    })
});

describe("Square Check", ()=>{
    it("Returns square of a given value", ()=>{
        let data = 5;
        let res = adder.Square(data);

        expect(res).toBe(25);

    } );
});
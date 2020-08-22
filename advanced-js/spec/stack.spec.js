var stack = require("../stack");


describe("Check Push",()=>{
    if("Works if push works or not",()=>{
        let myStack = stack.myStact;
        myStack.push("Abu Haider");
        myStack.push("Siddiq");

        let count = myStack.count;

        expect(count).toBe(2);
        
    });
});

describe("Check Pop",()=>{
    it("Works if pop works for the stack", ()=>{
        let myStack = stack.myStact;
        myStack.push("Abu Haider");
        myStack.push("Siddiq");
        let last_name = myStack.pop();
        expect(last_name).toBe("Siddiq");
    });
});
async function callAllAsync(){
    console.log(await tC());
    task1();
     task2();
     task3();
}

var tC =()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("promise fulfilled");
        }, 3000);
    });
}; 

function task1(){
    setTimeout(()=>{
        console.log("Task 1 done");
    }, 3000);
}

function task2(){
    console.log("Task 2 done");
}

function task3(){
    console.log("Task 3 done");
}

callAllAsync();


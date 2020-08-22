
const rxjs = require("rxjs");


const myObservable = new rxjs.Observable(observer =>{
    observer.next(getCat());
    observer.next(getCar());
}); 

const getCat = ()=>{
    setTimeout(()=>{
        console.log("inside cat");
    }, 3000);
}

const getCar = () =>{
    setTimeout(()=>{
        console.log("Inside car");
    },0);
}

myObservable.subscribe((data)=>{
    // console.log(typeof(data));
    console.log(data);
});
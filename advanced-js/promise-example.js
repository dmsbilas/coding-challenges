var A = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("I am inside A");
    }, 3000);
});

// var A = ()=>{
//     setTimeout(()=>{
//         console.log("I am inside A");
//     }, 3000);
// };

// var B = ()=>{
//     console.log("I am inside B");
// };
var B = new Promise((resolve, reject)=>{
    resolve("I am inside B");
});

// var C = ()=>{
//     console.log("I am inside C");
// };
var C = new Promise((resolve, reject)=>{
    resolve("I am inside C");
});

// A.then((data)=>{
// console.log(data);
// }).then(()=>{
//     B.then((dataB)=>{
//         console.log(dataB);
//     }).then(()=>{
//         C.then((dataC)=>{
//             console.log(dataC);
//         });
//     });
// });


// A.then((dataA)=>{
//     console.log(dataA);
// }).then(()=>{
//     B.then((dataB)=>{
//         console.log(dataB);
//     }).then(()=>{
//         C.then((dataC)=>{
//             console.log(dataC);
//         });
//     });
// });


// A.then((dataA)=>{
// B.then((dataB)=>{
// C.then((dataC)=>
// {
//     console.log(dataA);
//     console.log(dataB);
//     console.log(dataC);

// });});});

console.log(await A);
console.log(await B);
console.log(await C);
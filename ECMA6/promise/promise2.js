// Promise.all can be used to trigger multiple asynchronous calls, at the same time and notify 
// once all results come in.

// It returns array containing results of all promises when all are resolved. And a reject with 
// the value, if any one of the promise gets rejected.

console.log(new Date());

var promise1 = new Promise((resolve, reject)=>{
        setTimeout(()=> {
            callback1(resolve, reject);
        }
        , 3000);
    })

var callback1 = (resolve, reject)=> {
    console.log("Process 1 completed!");
    resolve("Promise 1 resolved!");
    reject("Sorry couldn't complete promise1!");
}

var promise2 = new Promise((resolve, reject)=>{
        setTimeout(()=> {
            callback2(resolve, reject);
        }
        , 2000);
    })
var callback2 = (resolve, reject)=> {
    console.log("Process 2 completed!");
    resolve("Promise 2 resolved!");
    reject("Sorry couldn't complete promise2!");
}


Promise.all([promise2, promise1]).then((val)=> {
    console.log(val);
},
(reason)=> {
    console.log(reason);
})
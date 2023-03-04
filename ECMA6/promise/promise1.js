var promise1 = new Promise((resolve, reject)=>{
        setTimeout(()=> {
            callback1(resolve, reject);
            console.log("$$$$");
        }
        , 3000);
    })

var callback1 = (resolve, reject)=> {
    console.log("Process 1 completed!");
    reject("Sorry couldn't complete promise1!");
    console.log("####");
    resolve("Promise 1 resolved!");
    console.log("####");
}
promise1.then((val)=> {
    console.log(val);
},
(reason)=> {
    console.log(reason);
})
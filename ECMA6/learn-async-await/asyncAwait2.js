
function doSomeAsyncTask(val) {
    return new Promise((resolve)=> {
        setTimeout(()=> {
            console.log("val: " + val);
            resolve();
        }, 2000);
    });
}

/* The async keyword declares a function as asynchronous and makes it return a promise.
The "await" keyword is used to suspend the execution of its surrounding async function until 
the expression after "await" keyword which wraps a promise gets fulfilled or rejected.

The async and await keywords enable asynchronous, promise-based behavior to be written in 
a cleaner style, avoiding the need to explicitly configure promise chains.
*/
async function fun1() {
    for(let i=0; i<5; i++) {
        await doSomeAsyncTask(i);
    }
}

fun1();
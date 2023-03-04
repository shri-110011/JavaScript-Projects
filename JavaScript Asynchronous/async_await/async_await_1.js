// The keyword async before a function makes the function return a promise:
async function compute(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Both operands must be numbers!");
    }
    let sum = new Promise((resolve, reject) => 
                            {
                                setTimeout(() => resolve(a+b), 2000)
                                // setTimeout(() => reject(a+b), 2000)
                            }
                        );
    console.log("Inside compute()");

    /* The await keyword can only be used inside an async function.
    The await keyword makes the function pause the execution and wait for a resolved promise 
    before it continues:
    */
    let res = await sum;
    console.log(typeof res);
    return res;
}

function myDisplayer(val) {
    console.log("Inside myDisplayer");
    console.log(val);
}

compute(3, 12.4).then(
    (res) => myDisplayer(res), 
    (rej) => console.log("Something bad occurred: " + rej)
);
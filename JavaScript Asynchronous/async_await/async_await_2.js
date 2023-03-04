async function compute(a, b) {
    if(typeof a !== 'number' || typeof b !== 'number') {
        throw new Error("Both operands must be numbers!");
    }

    let sum = new Promise((resolve, reject) => 
                            {
                                setTimeout(() => reject(a+b), 2000);
                            });
    console.log("Inside compute()");
    let res = await sum;
    myDisplayer(res);
}

function myDisplayer(val) {
    console.log("Inside myDisplayer");
    console.log(val);
}

compute(2, 5).catch(err => {console.log("Error occurred! " + err)});
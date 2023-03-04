function wait() {
    return new Promise((resolve)=> {
        setTimeout(()=> {
            console.log("Wait over");
            resolve();
        }, 3000);
    });
}

async function fun1() {
    await wait();
    console.log("Ok");
}

fun1();
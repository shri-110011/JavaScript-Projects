const getConnectionObject = () => { return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log("Got new connection object!")
            resolve(true)
        }, 3000)
    })
}
const checkEmailUniqueness = () => { return  new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log("Email uniqueness checked!")
            resolve(true)
        }, 2000)
    })
}
const registerUser = () => {
    return new Promise((resolve, reject) => {
        getConnectionObject()
        .then((res)=>{
            return checkEmailUniqueness()
        })
        .then((res)=>{
            console.log("###")
            // reject(true)
            // resolve(true)
        })
        .then((res) =>{
            console.log("$$$")
            reject(true)
            // resolve(true)
        });
    })
}

registerUser()
.then((resolve) => console.log("Work completed"),
        (res) => {
        console.log(res);
    });

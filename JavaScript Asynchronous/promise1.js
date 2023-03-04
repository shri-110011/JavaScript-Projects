/* a promise can be created with the constructor syntax, like this:
let promise = new Promise(function(resolve, reject) {
  // Code to execute
});

The constructor function takes a function as an argument. This function is called the 
executor function.

The executor function takes two arguments, resolve and reject. These are the callbacks 
provided by the JavaScript language. Your logic goes inside the executor function that runs 
automatically when a new Promise is created.

*/
const getConnectionObject = new Promise((resolve, reject) => {
    setTimeout(()=> {
        console.log("Got new connection object!")
        resolve(true)
    }, 3000)
})
const checkEmailUniqueness = new Promise((resolve, reject) => {
    setTimeout(()=> {
        console.log("Email uniqueness checked!")
        resolve(true)
    }, 2000)
})

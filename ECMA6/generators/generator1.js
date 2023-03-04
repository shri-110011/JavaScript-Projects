//Generators are also functions. However, unlike functions, we can pause the execution and 
// later resume the code execution using a generator function.

// Generators also allow us to turn asynchronous code into synchronous-looking code.

// function *foo() {
//     yield 'hi';
//     yield 'dude';
// }
// let iterator = foo();
// console.log(iterator.next()); //Object {value: "hi", done: false}
// console.log(iterator.next()); //Object {value: "dude", done: false}
// console.log(iterator.next()); //Object {value: undefined, done: true}

function *foo() {
    yield 'hi';
    let val =  yield 'dude ';
 
    return val;
}

let iterator = foo();
console.log(iterator.next());  // Object {value: "hi", done: false}
console.log(iterator.next());  // Object {value: "dude", done: false}
console.log(iterator.next('bye'));  // Object {value: "bye", done: true}
console.log(iterator.next());  // Object {value: undefined, done: true}
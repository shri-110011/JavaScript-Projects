// function *foo() {
//     yield* ['hi', 'hello'];        
// }

// let iterator = foo()
// console.log(iterator.next());  // Object {value: "hi", done: false}
// console.log(iterator.next());  // Object {value: "hello", done: false}
// console.log(iterator.next());  // Object {value: undefined, done: true}

//--------------------------------------------------------------------------
// function* foo() {
//     yield* ['hi', 'hello'];        
// }
// function *bar() {
//     yield * foo();
//     yield "bye";        
// }
// let iterator = bar()
// console.log(iterator.next());  // Object {value: "hi", done: false}
// console.log(iterator.next());  // Object {value: "hello", done: false}
// console.log(iterator.next());  // Object {value: "bye", done: false}
// console.log(iterator.next());  // Object {value: undefined, done: true}

//--------------------------------------------------------------------------

function* person() {
    let age = yield 'Age please';
    console.log(age);                                                    
    let location = yield 'Your age is ' + age + ' Your location please....';
    console.log(location);                                                        
    return location;    
}                                                      
let iterator = person();
console.log(iterator.next());    
// Object {value: "Age please", done: false}
console.log(iterator.next(10));  
// Object {value: "Your age is 10 
//              Your location please....", done: false}
console.log(iterator.next('LA')); 
//   Object {value: "LA", done: true}

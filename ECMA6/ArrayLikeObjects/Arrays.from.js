/*The Array.from() static method creates a new, shallow-copied Array instance from an 
array-like or iterable object. */

/*array-like objects (objects with a length property and indexed elements (eg: arguments 
object that is available inside every non arrow function.)); or iterable objects (objects 
such as Map and Set) */

//Sysntax: Array.from(arrayLike [, mapFn [, thisArg]])
console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]

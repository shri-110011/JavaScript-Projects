/* The spread (...) syntax allows an iterable, such as an array or string, to be expanded in 
places where zero or more arguments (for function calls) or elements (for array literals) 
are expected. */

function sum(x, y, z) {
    return x + y + z;
  }
  
const numbers = [1, 2, 3];

console.log(sum(...numbers));
// Expected output: 6

let arr1 = [101, 102, 103];

// A new array with the same elements as in arr1 will be created
let arr2 = [...arr1];

console.log("arr1: " + arr1);
console.log("arr2: " + arr2);

arr2[2] = 1;

console.log("arr1: " + arr1);
console.log("arr2: " + arr2);
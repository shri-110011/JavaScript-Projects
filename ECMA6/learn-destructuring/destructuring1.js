/* The destructuring assignment syntax is a JavaScript expression that makes it possible to 
unpack values from arrays, or properties from objects, into distinct variables.
*/
let a, b, rest;
/* Destructuring uses similar syntax on both LHS and RHS, but on the LHS we need to define 
what value is to be extracted from the RHS which acts as the source for data.
*/
[a, b] = [10, 20];

console.log(a);
// Expected output: 10

console.log(b);
// Expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// Expected output: Array [30, 40, 50]

let obj = {x: 16, y: 5};

/* Note: While destructuring an object the attributes name on both the LHS and RHS must 
match. The order of the attributes in the LHS doesn't matter just the attribute name must 
be same on both sides. 
*/
let {x, y} = obj;
// is equivalent to:
// let x = obj.x;
// let y = obj.y;
console.log(x); // Expected output: 16
console.log(y); // Expected output: 5

let {x1, y1} = obj;
console.log(x1); // Expected output: undefined
console.log(y1); // Expected output: undefined

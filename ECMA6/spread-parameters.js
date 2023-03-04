function sum(x1, y1, z1) {
    return x1+y1+z1;
}
let args = [1, 2, 3];
let add = sum.apply(null, args); 
console.log(add);

//ES6 syntax:
//Spread Operator ( ...) is used to spread an array elements into parameters.
function sum2(x1, y1, z1) {
    return x1+y1+z1;
}
let args2 = [1, 2, 5];
let add2 = sum2(...args2);
console.log(add2); 

//Spread Operator can be used for concatenation of arrays:
var parts = ["shoulder", "knees"];
var bodyParts = ["head", ...parts, "and", "toes"]; 
console.log(bodyParts)

//Destructuring arrays and objects.
let [x, y, ...z] = [1,2,3,4,5,6];           
console.log(z);
//would mean x = 1, y = 2, z = [3,4,5,6]

let {x2, y2, ...z2} = {x: 1, y: 2, z: 3, a: 4};    
console.log(z2);
// would mean x = 1, y = 2, z = { z: 3, a: 4 } 
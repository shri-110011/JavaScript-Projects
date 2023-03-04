//ES5
// var bio = function(name, age, country) {
//     return {name: name, age: age, country: country};              
// };
// console.log(bio("A.Shrikant", 23, "Delhi"));

//ES6
//Arrow functions can also be used as function expressions to return object literals. 
//The function body should be wrapped in parantheses () to achieve this.
var bio = (name, age, country) => { return {name: name, age: age, country: country} }
console.log(bio("A.Shrikant", 23, "Delhi"));
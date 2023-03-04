import {name} from "./module1.js";

let maximum = (a, b) => {
    return a>b?a:b;
}
// We can't use "module" object in an ES module which would be available in CommonJS module. 
// module.exports = {maximum} // ReferenceError: module is not defined

export { maximum };

const states = [['TamilNadu'], ['Punjab', 'Haryana']];

// Using array destructuring
const [Chennai, Chandigarh] = states;

export {Chennai, Chandigarh};

console.log(name);

// console.log(module); // ReferenceError: module is not defined
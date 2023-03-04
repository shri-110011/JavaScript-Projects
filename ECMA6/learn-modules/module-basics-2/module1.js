// Use the keyword "export" to export certain variables from a module,

/* ES6 Modules gives a fine grain control to import / export just what is required 
for a particular module. */

function sum(a, b) {
    console.log("Inside sum");
    return a+b;
}
function difference(a, b) {
    console.log("Inside difference");
    return a-b;
}

const name = "A.Shrikant";

// export { sum, difference, name };  // separate multiple exports using comma

export { sum as add, difference as minus, name } // aliasing

// There can be only one default export in an ES module.
export default function greet() {
    console.log("Hello there!");
}
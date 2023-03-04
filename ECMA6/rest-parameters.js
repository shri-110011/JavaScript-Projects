//slice method can also be called to convert Array-like objects/collections to a new Array.
function sum() {
    var args = Array.prototype.slice.call(arguments);  
    // converts args to array
    result = 0;
    console.log(args);
    console.log(arguments instanceof Array);
    console.log(args instanceof Array);
    args.forEach(function (args) { 
                 result += args;
     } );
    return result;
}
sum(1,2,3);


//args is rest parameter
function sum2(...args) {
    var result = 0;
    args.forEach(function(args) { result += args; } )
    return result;
}
let [x,y,z] = [1, 2, 3];
let add = sum2(x, y, z);
console.log(add);  // output: 6
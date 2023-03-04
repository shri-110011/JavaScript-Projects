/* Only iterable objects, like Array, can be spread in array and function parameters. 
Many objects are not iterable, including all plain objects that lack a Symbol.iterator 
method:
 */
var obj = { key1: 'value1' };
// var array = [...obj]; // TypeError: obj is not iterable

/* For typical arrays, all indices are enumerable own properties, so arrays can be spread 
into objects. */
var array = [1, 2, 3];
var obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }

console.log(obj);
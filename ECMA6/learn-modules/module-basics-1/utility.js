/* A module is just a component of a program that contains functions and values. 

Node.js treats each file in a Node project as a module that can export values and 
functions from the file.

*/
const replaceStr = (str, substringToBeReplaced, replacer) => {
    const regex = new RegExp(substringToBeReplaced, "g")
    const replaced = str.replace(regex, replacer)
    return replaced
}

const function1 = function() {
    console.log("I am a function")
}

/* The following variables may appear to be global but are not. They exist only in 
the scope of modules.
require()
module
exports
__dirname
__filename

module: A reference to the current module. In particular, module.exports is used 
for defining what a module exports and makes available through require().

exports: A reference to the module.exports that is shorter to type.
 
*/

// By default module.exports is an empty object.
// console.log(module);

/* Here we create a new property in the module.exports object where the key is "replaceStr"
and value is the function definition for "replaceStr"  .
*/
// module.exports.replaceStr = replaceStr;

/* Here we assign an object to module.exports with key equal to the name of the 
function "replaceStr" and value equal to the function definition for "replaceStr" . */
module.exports = {replaceStr};

// console.log(module);

/* Here we use the ...(spread operator) on the object module.exports to expand the 
properties of this object and add a new property to the creating object and then assigning
that to module.exports.
*/
// module.exports = {function1, ...module.exports};

/* Here we create a new property in the module.exports object where the key is "function1"
and value is the function definition for "function1".
*/
// module.exports.function1 = function1;

/* exports would be replaced by module.exports so 
exports.function1 = function1; is 
equivalent to module.exports.function1 = function1;

But if module.exports has already been assigned an object with functions and values to
be exported as properties then 
exports.function1 = function1;
will not make "function1" to be exported to module.exports because exports holds the older
reference to module.exports.
*/
exports.function1 = function1;

// console.log(module);

// logging the complete path to the directory of this module
// console.log(__dirname);

// logging the complete path to this module
// console.log(__filename);
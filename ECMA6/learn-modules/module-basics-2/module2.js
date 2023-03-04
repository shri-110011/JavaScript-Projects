
/* Note: CommonJS modules is a standard for NodeJS to create modules in NodeJS. Remember 
modules are components that contains one or more functions or values. They provide a way 
to encapsulate JavaScript code for reuse.

ES modules is a standard for JavaScript for encapsulating JavaScript code.

In CommonJS we use "exports" or "module.exports" to export functions and values from a 
module.
And then we use "require()" in the other module where we want to use the code from this
module where we use "exports".

In ES modules we use "export" to export code from a module. And then we use "import" 
keyword in the other module where we want to use the code from this module where we use 
"export".
 */

/* Note that we use object destructuring to extract what is required from the other 
module.*/
// import { sum, difference, name } from './module1.js';

/* When we don't use destructuring Javascript knows that we are trying to import the 
the default import of that module.

This is the reason why a ES module can't have multiple "default" exports.

Another thing when importing a default import is that we can use an alias for it.
Below we use "x" as an alias for the "greet" function in "module1.js". 
*/
// import x from './module1.js'

// console.log(difference(12, 13));
// console.log(name);
// x();
//------------------------------------------------

// Use * to import all the exports from the other module.
import * as utils from './module1.js';
import { Chandigarh, Chennai, maximum } from './module3.js';
// console.log(utils.difference(3,1));
console.log(utils.minus(3,1));

console.log(maximum(212,3));

console.log(Chennai);
console.log(Chandigarh);

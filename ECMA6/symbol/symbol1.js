// Symbols are new unique, immutable, primitive data type just like Number, String, and Boolean. 
// They were originally meant to provide private properties.

//var sym1 = Symbol(); will not create a global symbol that is available in the whole codebase.

// Symbol.for(key) method searches for existing symbols with the given key and returns it, 
// if found. Otherwise, it creates a new symbol in the global symbol registry with this key 
// and then returns the symbol.

// Symbol.keyFor(key) method is essentially opposite of Symbol.for(key).
// Instead of passing a key to get a symbol, pass a symbol to get a key.

var sym1 = Symbol();
var arr = [1,2,3];
sym1 = arr;
console.log(sym1[0]);
console.log(Symbol.for(arr))

//Note: The key for a symbol haas to be of string type.
var arr2 = [11,2,3];
var sym2 = Symbol.for(arr2);
// sym2 = arr2;
console.log(sym2);
console.log(Symbol.for(arr2));
console.log(typeof Symbol.keyFor(sym2));


// Symbols can be used as object keys to have (semi) private properties in JavaScript.
// Defining symbol 
let email = Symbol(); 
// Defining object "user"
let user = {      
    name:"praveen", 
    age : 30, 
//Symbol as key in array 
    [email] : "praveen@gmail.com" 
 };  
 console.log(user);
 console.log(user[email]);  
 // praveen@gmail.com

for (var i in user) { console.log(i);}
console.log(Object.keys(user)); //Output:["name","age" ]
console.log(Object.getOwnPropertyNames(user)); //Output:["name","age" ]

// Symbols in Objects can be accessed via Object.getOwnPropertySymbols or Reflect.ownKeys, 
// thus making them public for all to see.

console.log(Object.getOwnPropertySymbols(user));  
//Output:  [ Symbol() ]

console.log(Reflect.ownKeys(user) );   
 //Output: [ "name", "age", Symbol() ]
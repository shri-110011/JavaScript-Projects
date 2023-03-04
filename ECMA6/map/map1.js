/*The Map object holds key-value pairs and remembers the original insertion order of the 
keys. Any value (both objects and primitive values) may be used as either a key or a value. */

let myMap = new Map([['a1', 'hello'], ['b1', 'goodbye']]);
console.log(myMap);

myMap.set('c1', 'hi');
//Note: map can't have different values for the same key the last given value for the key 
//would be considered.
myMap.set('b1', 'goodafternoon');
myMap.set(4, {name:'shri', age:23});
console.log(myMap);
console.log(myMap.size);
console.log(myMap.keys());
console.log(myMap.values());
console.log(myMap.get(4));

//Map.delete() returns true if it deleted the mentioned key value pair otherwise it returns false.
myMap.delete('b11');
console.log(myMap);

//Looping through a map which is an iterable object.
for(let [key,value] of myMap) {
    console.log(key+" "+value);
}

console.log(typeof myMap);
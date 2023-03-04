//Set is used to store unique values that can be either primitives or objects.
let myArr = [14, 65, 72, 13];
let mySet = new Set(myArr);

console.log(mySet);

mySet.add(55);
mySet.add(14);
mySet.add([1,2,3]);
mySet.add({name: "shri", age: 23});

console.log(mySet);
console.log(mySet.size);

mySet.delete(65);

console.log(mySet);

// mySet.clear();
console.log(mySet);

console.log(mySet.has(14));
mySet.add([1,2,3]);

console.log(mySet);

mySet.forEach(val=>{
    console.log(val);
})
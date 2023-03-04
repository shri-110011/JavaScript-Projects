let myWeakMap = new WeakMap();

var person1 = {
    name: "A.Shrikant",
    age: 23
}
var person2 = {
    name: "A.Siddhath",
    age: 21
}

var key1 = {
    id: 1
}

var key2 = {
    id: 2
}
myWeakMap.set(key1, person1);
myWeakMap.set(key2, person2);
console.log(myWeakMap);
myWeakMap.delete(2);
console.log(myWeakMap);

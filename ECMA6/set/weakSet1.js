let myWeakSet = new WeakSet();

var person1 = {
    name: "A.Shrikant",
    age: 23
}
var person2 = {
    name: "A.Siddhath",
    age: 21
}

myWeakSet.add(person1);
myWeakSet.add(person2);

console.log(myWeakSet);
console.log(myWeakSet.delete(person2));
console.log(myWeakSet);
var person = {name: "A.Shrikant", age: 23};
console.log(person);

//Here we are making a copy of the 'person' object.
var a = {...person};
console.log(a);

//Here we are changing an attribute of a copy of the 'person' object.
a.age = 22;
console.log(a);
console.log(person);

//Here we are changing an attribute of a copy of the 'person' object and then assigning a new object to b.
b = {...person, age:13}
console.log(b);
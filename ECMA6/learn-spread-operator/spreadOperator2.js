
var person = {
    name: "John",
    age: 25
};

/* In an object literal, the spread syntax enumerates the properties of an object and adds 
the key-value pairs to the object being created. */
var personDetails = {
    ...person,
    address: {
        street: "Main",
        city: "Madurai",
        state: "Tamil Nadu",
        country: "India"
    }
}
console.log("person:");
console.log(person);
console.log("personDetails:");
console.log(personDetails);

person.age = 26;

console.log("person:");
console.log(person);
console.log("personDetails:");
console.log(personDetails);


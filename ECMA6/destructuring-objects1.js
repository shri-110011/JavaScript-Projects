var obj = {
    firstName:  "Neha",
    lastName:   "Singh",
    age:     40,
    city:   "chennai",
    phone:   980000000
}
var person = {firstName, lastName:last, ...details} = {
    firstName:  "Neha",
    lastName:   "Singh",
    age:     40,
    city:   "chennai",
    phone:   980000000
};

/* Note: While destructuring an object the attributes name on both the LHS and RHS must 
match. The order of the attributes in the LHS doesn't matter just the attribute name must 
be same on both sides. 
The variable we placed as values to the attribute on the LHS will also contain the values 
that we will get after destructuring.
*/
console.log (person.firstName , details);
//output: Neha {age: 40, city: "chennai", phone: 980000000}
// console.log(person);
// console.log(first);
// first = "Sneha";
// console.log(first);
// console.log(person);
// person.age = 41;
// console.log(person);
// console.log(obj);
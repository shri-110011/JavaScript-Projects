//With the call() method, you can write a method that can be used on different objects.

//The call() method is a predefined JavaScript method.

//It can be used to invoke (call) a method with an owner object as an argument (parameter).
var person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
var person1 = {
  firstName:"John",
  lastName: "Doe"
}
var person2 = {
  firstName:"Mary",
  lastName: "Doe"
}
var x = person.fullName.call(person1); 
console.log(x);
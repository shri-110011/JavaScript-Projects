//Difference b/w call & apply:
// The call() method takes arguments separately.

// The apply() method takes arguments as an array.
var person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
var person1 = {
    firstName:"John",
    lastName: "Doe"
}
var x = person.fullName.apply(person1, ["Oslo", "Norway"]); 
console.log(x);


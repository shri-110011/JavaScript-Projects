var person = {
    name: "A.Shrikant",
    hobbies: ["Programming", "Listening to music", "Dancing"],
    sayName() {
        console.log(this.name);
    },
    showHobbies: function () {
        this.hobbies.forEach((hobby)=>{
            console.log(`${this.name}  likes ${hobby}`)
        })
    }
}
//This below function sayName using => operator won't work as expected when called because
// the this keyword inside the sayName: ()=> { } has a lexical scope and not the object scope.
// sayName:()=> {
//     console.log(this.name);
// }
// Note:
// sayName() {
//     console.log(this.name);
// }
// is same as
// sayName: function() {
//     console.log(this.name);
// }

person.sayName();
person.showHobbies();
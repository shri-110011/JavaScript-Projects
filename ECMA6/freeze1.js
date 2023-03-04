//const car = { name: 'Benz', class: 'c' }
///car.class = 'e'
// Note: You can't add or remove attributes to the car object that has been declared using the 
// const keyword but you can change the value of the car object's attribute.
// car = {name: "A.Shrikant"}
//console.log(car)   
// O/P:  { name: 'Benz', class: 'e' }

const car = Object.freeze({ name: 'Benz', class: 'c' })
car.class = 's'
car.color = 'red'
console.log(car)   
//   { name: 'Benz', class: 'c' }


var car2 = Object.freeze({ name: 'Benz', class: 'c' })
car2.class = 's'
car2.color = 'red'
console.log(car2)   
//   { name: 'Benz', class: 'c' }

// Note: Const doesn't make objects immutable. To make object immutable, use the freeze() function.
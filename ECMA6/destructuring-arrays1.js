// var [one, two, three, four] = ["chennai", "mumbai", "goa", "cochin"];  
// console.log(one);  //=> chennai

// var [,two,,]=["chennai", "mumbai", "goa", "cochin"];
// console.log(two);  //=> mumbai

const [one, two, three] = [ 1,  [2,3],  [4,5] ];   
console.log(three[2]); // o/p: undefined
//one=> 1 two=> [2,3], //three=>[4,5]
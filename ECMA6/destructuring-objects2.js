// const {one: a, two: b, three: c}  = { one: 1, two: 2, three: { four: 4, five: 5} } ;  
// console.log(a);

const {one, three:b, two, four=4} = { one: 1, two: 2, three: 3 };
console.log(one);
console.log(four);
console.log(b);
console.log(two);
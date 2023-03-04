function list() {
    return Array.prototype.slice.call(arguments)
}
  
let list1 = list(1, 2, 3) // [1, 2, 3]
console.log(list1);
function add(arr){
    sum = 0;
    arr.forEach((val)=>{
        sum += val;
    });
    return sum;
  }
function multiply(arr){
    product = 1;
    arr.forEach((val)=>{
        product *= val;
    });
    return product;
}
exports.add = add;
exports.multiply = multiply;
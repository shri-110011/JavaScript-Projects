function myDisplayer(some) {
    console.log(some)
}
  
function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
    console.log("hello");
}

myCalculator(5, 5, myDisplayer);
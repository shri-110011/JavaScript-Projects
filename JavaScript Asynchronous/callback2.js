function myDisplayer(some) {
    console.log("Inside myDisplayer");
    console.log(some);
}
  
function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    setTimeout(() => myCallback(sum), 3000);
    console.log("hello");
}

myCalculator(5, 5, myDisplayer);
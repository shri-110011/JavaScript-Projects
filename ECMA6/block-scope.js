function doSomethig() {
    var val = 245;
    {
        let val = 23;
        color = "red";
        console.log(val);
    }
    console.log(val);
    console.log(color);
}
doSomethig()
// console.log(val);

//Note:
//1. let variables have a block scope.
//2. Variables declared without keyword var or let have a global scope.
//3. Variables declared with keyword var also have a global scope.
//4. Variables declared with keyword var inside a function are not accessible outside it.
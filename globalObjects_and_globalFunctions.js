console.log(__filename);//filename is a global object in NodeJS
console.log(__dirname);//dirnameis a global object in NodeJS
console.log(/filename/);
val="A.Shrikant";
function greet(){
	console.log("Hello "+val);
}
setTimeout(greet, 5000);
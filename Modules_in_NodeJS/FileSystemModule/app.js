var fs = require('fs');//fs is the file system module
fs.readFile("input.txt", function(err, data){
	if(err)
		console.log(err);
	else{
		console.log("Async data is:\n"+data);
		console.log("Inside callback: "+typeof data);
	}
});
var data = fs.readFileSync("input.txt");

console.log("Sync data is:\n"+data);
console.log("Outside callback: "+typeof data);
data=data.toString();
console.log("Outside callback: "+typeof data);
console.log("Outside callback: "+data);

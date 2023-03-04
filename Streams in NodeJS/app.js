var fs = require('fs');
var readFileStream = fs.createReadStream("input.txt");
var data = "";

//readFileStream.on() has two events 'data' and 'end'
//data event is fired when the file reading starts
//end event is fired when the file reading is finish
readFileStream.on("data", function(chunk){  
	data += chunk;
});
readFileStream.on("end", function() {
	console.log("File data:\n"+data);
	console.log(data.slice(2,6));
});

var writeData = "Welcome To Jumanji!";
console.log(typeof data);
console.log(data.length);
var writeFileStream = fs.createWriteStream("output.txt");
writeFileStream.write(writeData, "UTF-8");
writeFileStream.end();
//If we don't write this above code i.e. (writeFileStream.end();) then no error is thrown but the finish event won't be fired.
writeFileStream.on("finish", function(){
	console.log("Write Finish!");
});

var fs = require("fs");
var fileStreamReader = fs.createReadStream("input.txt");
var data = "";
fileStreamReader.on("data", function(chunk){
	data += chunk;
	console.log("Chunk is:" +chunk);
});
fileStreamReader.on("end", function(){
	fileStreamWriter.write(data, "UTF-8");
	fileStreamWriter.end();
	console.log("Write completed!");
});
var fileStreamWriter = fs.createWriteStream("output.txt");


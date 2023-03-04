var http = require('http');//require() is a NodeJS built in module to import other modules 

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<h1>Hello World!</h1>');
  res.end('<h2>This is A.Shrikant.</h2>');
}).listen(8080);//.listen(8080) means whenever a request comes to the local server at port 8080 this function will be fired
console.log("Server created at port 8080...");


// var http = require('http');
// var fs = require('fs');
// http.createServer(function (req, res) {
//   var fileStreamReader = fs.createReadStream("/wiki/Nodejs");
//   var data = "";
//   fileStreamReader.on("data", function(chunk){
//     data += chunk;
//     //console.log("Chunk is:" +chunk);
//   });
//   fileStreamReader.on("end", function(){
//     fileStreamWriter.write(data, "UTF-8");
//     fileStreamWriter.end();
//     //console.log("Write completed!");
//   });
//   var fileStreamWriter = fs.createWriteStream("Nodejs.html");
// }).listen(443);
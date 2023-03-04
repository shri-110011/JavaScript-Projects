const express = require('express')
const app =express();

//Express has a bug over here if we already have an index.html file inside the static folder and make a response with index2.html folder then on making a request with route'/' the index.html folder is getting served if we use this express.static()
app.use(express.static("static"));//This middleware ensures that any static files requested are checked in this folder
//Note: app.use(express.static("./static")); is also correct 
// ./ means wrt to the current directory
// / means the root directory i.e. the D or C drive

app.get("/", function(req, res){
	res.sendFile(__dirname+"/static/index2.html");
});

var server = app.listen(3001, function(){
	var host = server.address().address;
	var port = server.address().port;
	// console.log(__filename);//Prints the absolute path of the app.js
	// console.log(__dirname);//Prints the absolute path of the folder where app.js is present
	console.log("Server running at http://%s:%s", host, port);
});
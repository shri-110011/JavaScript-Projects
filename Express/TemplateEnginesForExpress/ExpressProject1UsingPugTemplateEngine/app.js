const express = require('express')
const app =express();

app.get("/", function(req, res){
	res.sendFile(__dirname+"/static/index.html");
});

app.get("/static/css/styles.css", function(req, res){
	res.sendFile(__dirname+"/static/css/styles.css");
});

var server = app.listen(3001, function(){
	var host = server.address().address;
	var port = server.address().port;
	// console.log(__filename);//Prints the absolute path of the app.js
	// console.log(__dirname);//Prints the absolute path of the folder where app.js is present
	console.log("Server running at http://%s:%s", host, port);
});
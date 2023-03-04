const express = require('express');
const path = require('path');
const app = express();//This code initializes the express object

app.get('/', function(req, res){
	res.send("<h1>Hello World!</h1>");
});


//Here we are getting the data from the url query string
app.get('/Family', function(req, res){
	//req.query will return an object
	const id = req.query.id;//Here id refers to the name of the query string attribute like /Family?id=1
	console.log(req.query);
	console.log(req.query.id);
	res.send("Welcome "+id);
});

//An example of a dynamic url mapping or of route parameters
app.get('/Family/:id', function(req, res){
	//req.params will return an object
	var id = req.params.id;//id in (req.params.id) is same as the one in (/Family/:id)
	console.log(req.params);
	if(id == 11)
		res.send("Welcome A.Shrikant");//Note: Semicolons(;) are optional
	else if(id == 12)
		res.send("Welcome A.Siddharth");
	else if(id == 13)
		res.send("Welcome S.Anand");
	else if(id == 14)
		res.send("Welcome A.Mohana");
});

//Code to create an http server
var server = app.listen(3001, function(req, res){
	var host = server.address().address
	var port = server.address().port;
	console.log("Server running at http//%s:%s", host, port)//Notice the format specifier %s
	//Code to get all the properties in app
	// for(x in app){
	// 	console.log(x);
	// }
	//typeof app is function
	//console.log(typeof app);
}); 
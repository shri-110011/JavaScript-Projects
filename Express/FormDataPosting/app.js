const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use("/public", express.static(path.join(__dirname,'static')));
//The extended option allows to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true). The “extended” syntax allows for rich objects and arrays to be encoded into the URL-encoded format, allowing for a JSON-like experience with URL-encoded.
app.use(bodyParser.urlencoded({'extended':false}));

//app.get() is used to get resource from the server
app.get('/', function(req, res){
	console.log(path.join(__dirname,'static'));
	res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

//app.get() is used to send data to the server
app.post('/userdata', function(req, res){
	console.log(req.body);//req.body will return an object
	res.send("Data posted sucessfully");
});

var server = app.listen(3001, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("Server running at http://%s:%s", host, port);
});
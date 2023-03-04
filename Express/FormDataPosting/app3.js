const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Joi = require('joi');

const app = express();

app.use("/public", express.static('static'));
//The extended option allows to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true). The “extended” syntax allows for rich objects and arrays to be encoded into the URL-encoded format, allowing for a JSON-like experience with URL-encoded.
app.use(bodyParser.urlencoded({'extended':false}));
app.use(bodyParser.json());//This middleware will be used only when the posted data has a content-type=application/json in the request header

//app.get() is used to get resource from the server
app.get('/', function(req, res){
	console.log(path.join(__dirname,'static'));
	res.sendFile(path.join(__dirname, 'static', 'index2.html'));
});

//app.get() is used to send data to the server
app.post('/userdata', function(req, res){
	console.log("req.body:");
	console.log(typeof req.body);
	console.log(req.body);//req.body will return an object
	console.log(req.body.uname);
	const schema = Joi.object().keys({
		uname: Joi.string().trim().required(),
		pwd: Joi.string().min(4).max(8).required()
	});

	Joi.attempt(req.body, schema, "Error:Invalid data");
	console.log("Valid Data");
			res.send("Data posted successfully!");
		
});

var server = app.listen(3001, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("Server running at http://%s:%s", host, port);
});
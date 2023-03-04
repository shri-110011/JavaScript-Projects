const express = require('express');
const app = express();

app.use(express.static("static"));

app.set("view engine", 'pug');

app.get("/", function(req, res){
	res.render(__dirname+"/static/index", {title:"Express"});
});

var server = app.listen(3001, ()=>{
	var host = server.address().address;
	var port = server.address().port;
	console.log("Server running at http://%s:%s", host, port);
});

const express = require('express');
const app = express();
const hbs1 = require('express-handlebars');

app.use(express.static("static"));

app.engine("hbs", hbs1({extname:'hbs', defaultLayout:'layout', layoutsDir: __dirname+"/static/views/"}));
app.set("view engine", 'hbs');

app.get("/", function(req, res){
	res.render(__dirname+"/static/index", {title:"Express Handlebars", condition:true, arr:[1,2,3]});
});

var server = app.listen(3001, ()=>{
	var host = server.address().address;
	var port = server.address().port;

	console.log("Server running at http://%s:%s", host, port);
});

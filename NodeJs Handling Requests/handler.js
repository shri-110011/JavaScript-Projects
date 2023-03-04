var queryString = require('querystring');
function home(res){
	console.log("Executing home handler");
	var htmlfile = '<!doctype html>'+
	'<html>'+
	'<head>'+
		'<title>Review Form</title>'+
	'</head>'+
	'<body>'+
		'<form action="/seePostedData" method="post">'+
			'<label for="firstname">Enter first name</label><br>'+
			'<input type="text" id="firstname" name="firstname"/><br>'+
			'<label for="lastname">Enter last name</label><br>'+
			'<input type="text" id="lastname" name="lastname"/><br><br>'+
			'<input type="submit" value="Click Here"/>'+
		'</form>'+
	'</body>'+
	'</html>';
	res.writeHead(200, {"content-type":"text/html"});
	res.write(htmlfile);
	res.end();
}
function seePostedData(res, postData){
	console.log("Executing seePostedData handler");
	console.log("typeof(postData): "+typeof(postData));
	console.log(queryString.parse(postData));//queryStrin.parse(postData) will return an object
	res.writeHead(200,{"content-type":"text/plain"});
	res.write(queryString.parse(postData).firstname+" "+queryString.parse(postData).lastname+" is the creator of Node.js");
	res.end();
}
module.exports.home = home;
module.exports.seePostedData = seePostedData;

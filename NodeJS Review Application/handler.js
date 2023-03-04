var queryString = require('querystring');
function home(res){
	console.log("Executing 'home' handler");
	var htmlfile = '<!doctype html>'+
	'<html>'+
	'<head>'+
		'<title>Review Form</title>'+
	'</head>'+
	'<body>'+
		'<form action="/review" method="post">'+
			'<textarea type="textarea" id="ta1" name="ta1" rows="20" cols="60"></textarea>'+
			'<input type="submit" value="Give Review">'+
		'</form>'+
	'</body>'+
	'</html>';
	res.writeHead(200, {"Content-Type":"text/html"});
	res.write(htmlfile);
	res.end();
}
function review(res, reviewData){
	console.log("Executing 'review' handler");
	res.writeHead(200, {"Content-Type":"text/plain"});
	console.log("reviewData:");
	console.log(reviewData);
	const qstr = queryString.parse(reviewData);
	console.log(qstr);//queryString(reviewData) will convert the reviewData into an object
	console.log(qstr.ta1);
	if(qstr.ta1) {
		res.write(qstr.ta1);
	}
	else {
		res.write("");
	}
	
	res.end();
}
exports.home = home;
exports.review = review;
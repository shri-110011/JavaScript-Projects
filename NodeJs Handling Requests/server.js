const http = require('http');
const url = require('url');

function runServer(route, handle){

	function onRequest(req, res){
		var pathName = url.parse(req.url).pathname;

		var postData = "";

		console.log("req.url: "+req.url);
		console.log("typeof req.url: "+typeof req.url);
		console.log("Request received for path: "+pathName);
		console.log("typeof pathName: "+typeof pathName);

		req.addListener("data", function(chunk){
			console.log("Received data");
			postData += chunk;
		});
		req.addListener("end", function(){
			route(res, handle, pathName, postData);
		});

	}

	http.createServer(onRequest).listen(8888);
	console.log("Server started at port 8888...");
}

module.exports.runServer = runServer;
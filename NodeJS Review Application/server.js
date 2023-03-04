const http = require('http');
const url = require('url');


function startServer(route, handle){
	/* 
	req is an object of the http.IncomingMessage
	res is an object of the http.ServerResponse
	*/
	function onRequest(req, res){
		var pathName = url.parse(req.url).pathname;
		console.log("Request received for path: "+pathName);
		console.log("type of(request.pathName): " + typeof pathName); //type of(request.pathName) is string

		// console.log(http)
		var reviewData = "";

		req.addListener('data', function(chunk){
			console.log("Received data");
			reviewData += chunk;
		});

		/* http.IncomingMessage extends the stream.Readable interface. And all streams are 
		instances of EventEmitter. Since req is an instance of http.IncomingMessage so it is
		a readable stream. And it emits an 'end' event is emitted when there is no more 
		data to be consumed from the stream.

		Here we used req.addListener('end', function(){}) to listen to the "end" event
		but we could also use the req.on("end, function() {})") because req is an 
		instance of EventEmitter and it would have that "on()".

		So this "end" event would be emitted when every http request comes and hence this 
		event handler asscoiated to "end" would be fired for every "end" event.
		*/
		req.addListener('end', function(){
			console.log("Inside server.js, reviewData: %s, typeof(reviewData):", reviewData, typeof reviewData);
			route(pathName, handle, res, reviewData);
		});

		console.log("request.url: "+req.url);
		// console.log("type of(request.url): "+typeof req.url);//type of(request.url) is string
		// for(y in req){
		// 	console.log(y);
		// }
		//O/P of the above for loop is the properties of the req object
		// _readableState
		// _events
		// _eventsCount
		// _maxListeners
		// socket
		// httpVersionMajor
		// httpVersionMinor
		// httpVersion
		// complete
		// headers
		// rawHeaders
		// trailers
		// rawTrailers
		// aborted
		// upgrade
		// url
		// method
		// statusCode
		// statusMessage
		// client
		// _consuming
		// _dumped
		// setTimeout
		// _read
		// destroy
		// _addHeaderLines
		// _addHeaderLine
		// _dump
		// _undestroy
		// _destroy
		// push
		// unshift
		// isPaused
		// setEncoding
		// read
		// pipe
		// unpipe
		// on
		// addListener
		// removeListener
		// off
		// removeAllListeners
		// resume
		// pause
		// wrap
		// setMaxListeners
		// getMaxListeners
		// emit
		// prependListener
		// once
		// prependOnceListener
		// listeners
		// rawListeners
		// listenerCount
		// eventNames
		// console.log("url.parse(request.url): "+url.parse(req.url));
		// console.log("typeof(url.parse(request.url)): "+typeof(url.parse(req.url)));
		// for(x in url.parse(req.url)){
		// 	console.log(x);
		// }
		//O/P of the above for loop is the properties of the url object
		// protocol
		// slashes
		// auth
		// host
		// port
		// hostname
		// hash
		// search
		// query
		// pathname
		// path
		// href
		// parse
		// format
		// resolve
		// resolveObject
		// parseHost
	}
	http.createServer(onRequest).listen(8888);
	console.log("Server started at port 8888...");
}

exports.startServer = startServer;

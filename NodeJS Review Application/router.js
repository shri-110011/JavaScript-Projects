function route(pathName, handle, res, reviewData){
	//console.log("Inside router.js");
	console.log("handle[pathName]: "+handle[pathName]+ "\ntypeof(handle[pathName]): "+typeof(handle[pathName]));
	if(typeof(handle[pathName]) === 'function'){
		console.log("Routing to path: "+pathName);
		handle[pathName](res, reviewData);
	}
	else {
		console.log("The path " + pathName + " does not exist.");
		/* response.writeHead(statusCode[, statusMessage][, headers])
		response.writeHead() sends a response header to the request. The status code is a 
		3-digit HTTP status code, like 404. The last argument, headers, are the response 
		headers. Optionally one can give a human-readable statusMessage as the second 
		argument.

		headers may be an Array where the keys and values are in the same list. The 
		even-numbered offsets are key values, and the odd-numbered offsets are the 
		associated values.

		We must call res.end() on each response to signal the server that all the response 
		headers and body have been sent and it should end this request-response cycle. 
		If we fail to call this res.end() then at the client end the page would keep loading.
		
		Status code 204 is for "No Content". 
		*/

		// res.writeHead(204, 
		// 	"The path " + pathName + " does not exist.", 
		// 	{
		// 		"Content-Type": "text"
		// 	})
		// .end();

		// res.writeHead(204, 
		// 	"The path " + pathName + " does not exist.", 
		// 	["Content-Type", "text/html"])
		// 	.end();

		/* And we can also skip the human-readable statusMessage as the second argument 
		and directly specify the third argument which is the response headers.
		*/
		// res.writeHead(204,
		// 	{
		// 		"Content-Type": "text"
		// 	})
		// .end();

		/* If response.write() or response.end() are called before calling res.WriteHead(), 
		the implicit/mutable headers will be calculated and then call to res.write() or
		res.end() would be made.

		*/
		// res.end("Hi");
		// res.writeHead(204,
		// 	{
		// 		"Content-Type": "text"
		// 	}
		// );

		/* When headers have been set with response.setHeader(), they will be merged with 
		any headers passed to response.writeHead(), with the headers passed to 
		response.writeHead() given precedence.

		So Content-Type would be "text" and not "text/plain" in the response headers section
		for below code.

		If res.writeHead() method is called and response.setHeader() has not been called, 
		it will directly write the supplied header values onto the network channel without 
		caching internally, and the response.getHeader() on the header will not yield the 
		expected result. If progressive population of headers is desired with potential 
		future retrieval and modification, use response.setHeader() instead.

		*/
		res.setHeader("Content-Type", "text/plain");
		body = "Hi";
		res.writeHead(200, 
			"Page loaded successfully", 
			{
				"Content-Type": "text",

				"Content-Length": Buffer.byteLength(body)
			}
		);

		console.log("Printing the header value for Content-Type: " + res.getHeader("Content-Type"));
		res.end(body);
	}
}
exports.router = route;
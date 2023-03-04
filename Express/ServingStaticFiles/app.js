const express = require('express');
const path = require('path');


const app = express();

/* To serve static files such as images, CSS files, and JavaScript files, use the 
express.static built-in middleware function in Express.

express.static(root, [options])
The root argument specifies the root directory from which to serve static assets.

After setting up this middleware: app.use(express.static('static')); 

Now, you can load the files that are in the static directory:
http://localhost:3001/css/styles.css

To use multiple static assets directories, call the express.static middleware function 
multiple times:

app.use(express.static('public'))
app.use(express.static('files'))
Express looks up the files in the order in which you set the static directories with 
the express.static middleware function.

*/
// app.use(express.static('static'));

// app.use() is used to create an application level middleware.
/* To create a virtual path prefix (where the path does not actually exist in the file 
system) for files that are served by the express. 
app.use('/static', express.static('public'))

Now, you can load the files that are in the public directory from the /static path prefix.

http://localhost:3000/static/images/kitten.jpg
http://localhost:3000/static/css/style.css
http://localhost:3000/static/js/app.js
http://localhost:3000/static/images/bg.png
http://localhost:3000/static/hello.html
*/
app.use("/public", express.static(path.join('static')));

app.get('/', function(req, res){
	//path.join(__dirname) will return the absolute address of the folder where app.js(the entry point of our application) is present 
	//console.log(path.join(__dirname));
	console.log(path.join(__dirname,'static'));

	/* res.sendFile(path [, options] [, fn])
	Transfers the file at the given path. Sets the Content-Type response HTTP header field 
	based on the filename’s extension. Unless the root option is set in the options object, 
	path must be an absolute path to the file.

	The method invokes the callback function fn(err) when the transfer is complete or when 
	an error occurs.
	*/
	res.sendFile(path.join(__dirname, 'static', 'index.html'));

	/* res.end() you can only respond with text and it will not set "Content-Type" */
	// res.end();

	/*  res.send() will check the structure of your output and set header information 
	accordingly.

	res.send() will set "ETag" attribute in the response header.
	The ETag HTTP response header is an identifier for a specific version of a resource. 
	It allows caches to be more efficient, and saves bandwidth, as a web server does not 
	need to send a full response if the content has not changed.
	 */
	// res.send({a:98});
});

var server = app.listen(3001, function(req, res){
	var host = server.address().address;
	var port = server.address().port;
	console.log("Server running at http://%s:%s", host, port);
});
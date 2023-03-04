/* Use the "dotenv" module's config() to load the custom environment variables provided 
using the .env file present at the root of our NodeJS application.  */
require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.PORT || 3001;

/* process is a global object and it provides information about the NodeJS application's 
runtime. */
// console.log(process);

/* Routing refers to determining how an application responds to a client request to a 
particular endpoint, which is a URI (or path) and a specific HTTP request method 
(GET, POST, and so on).

Each route can have one or more handler functions, which are executed when the route is 
matched.

Route definition takes the following structure:
app.METHOD(PATH, HANDLER)

app is an instance of express.
METHOD is an HTTP request method, in lowercase.
PATH is a path on the server.
HANDLER is the function executed when the route is matched.
*/
app.get('/', (req, res, next)=> {
    res.send("<h1>Hello World</h1>");
})

/* app.listen([port[, host[, backlog]]][, callback])
Binds and listens for connections on the specified host and port.
If port is omitted or is 0, the operating system will assign an arbitrary unused port.

The backlog is the maximum number of queued pending connections. The default is 511.
Note that port, host, backlog and callback are all optional.
*/
var server = app.listen(3001, (req, res, next)=> {
    console.log("Express erver running on port %s", server.address().port);
});
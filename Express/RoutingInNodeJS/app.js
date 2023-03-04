const express = require('express');
const path = require('path');
const http = require('http');
const router = express.Router();
var birds = require('./birds')

const app = express();


app.set('port', process.env.PORT || 3000);

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
});

/* Setting up a router level middleware that will be binded on to every request that the 
client makes. */
app.use(router);

// app.set('admin', "Shrikant");
/* app.set(name, data) is used to set name to a value and the value can be fetched 
using app.get(name) */

app.use('/public', express.static("static"));

//This is how using the router level middleware we can prevent access to file1.txt
router.get('/public/file1.txt', function(req, res){
    //console.log("Route check is active");
    res.send("Error! Page not found.");
});

app.get("/", (req, res)=>{
    res.sendFile(__dirname+"/static/index.html");
    //console.log(app.get('admin'));
});

var names=[
    {
        "name":"A.Shrikant",
        "age":23
    },
    {
        "name":"A.Siddharth",
        "age":20
    },
    {
        "name":"S.Anand",
        "age":49
    }
];


// app.get('/users/:From-:To', (req, res)=>{
//     // res.json(names.slice(req.params.From, req.params.To));
//     res.send(JSON.stringify(names.slice(req.params.From, req.params.To)));
// });

//Note:regular expressions are to be like this: /regexp/
//Here writing edit in the url is optional
app.get(/\/users\/(\d)\/?(edit)?/, (req, res)=>{
    console.log(req.params);
    if(req.params[1]){
        res.send("Editing user with id: "+req.params[0]);
    }
    else{
        res.send("User id is: "+req.params[0]);
    }
});

// app.get("*", (req, res)=>{
//     res.send("Error! Page not found.");
// });

//Here are some examples of route paths based on string patterns.

//This route path will match acd and abcd.
//This is because the character after which the ? symbol comes is optional 
// app.get('/ab?cd', function (req, res) {
//     res.send('ab?cd')
// });

//This route path will match abcd, abbcd, abbbcd, and so on.
// app.get('/ab+cd', function (req, res) {
//     res.send('ab+cd')
// });

//This route path will match abcd, abxcd, abRANDOMcd, ab123cd, and so on.
// app.get('/ab*cd', function (req, res) {
//     res.send('ab*cd')
// });

//This route path will match /abe and /abcde.
// app.get('/ab(cd)?e', function (req, res) {
//     res.send('ab(cd)?e')
// });

//Examples of route paths based on regular expressions:

//This route path will match anything with an “a” in it.
// app.get(/a/, function (req, res) {
//     res.send('/a/')
// });

/* This route path will match butterfly and dragonfly, but not butterflyman, dragonflyman, 
and so on. */
// app.get(/.*fly$/, function (req, res) {
//     res.send('/.*fly$/')
// });

/* Route parameters are named URL segments that are used to capture the values specified at 
their position in the URL. The captured values are populated in the req.params object, 
with the name of the route parameter specified in the path as their respective keys. */

/* To define routes with route parameters, simply specify the route parameters in the path 
of the route as shown below. */
// app.get('/users/:userId/books/:bookId', function (req, res) {
//     res.send(req.params)
// });


/* More than one callback function can handle a route (make sure you specify the next 
object). For example: */
// app.get('/example/b', function (req, res, next) {
//     console.log('The response will be sent by the next function ...');
//     next();
//   }, function (req, res) {
//     res.send('Hello from B!');
// });

app.use('/birds', birds)
app.get('/birds',function(req, res){
    res.send("Birds doesn't exist");
});

var server = http.createServer(app).listen(app.get('port'), ()=>{
    console.log("Express server running on port "+app.get('port'));
});
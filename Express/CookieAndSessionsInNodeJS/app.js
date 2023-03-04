const express = require('express');
const path = require('path');
const http = require('http');
var cookie = require('cookie');

const app = express();

app.set('port', process.env.PORT || 3001);

app.use('/public', express.static(path.join(__dirname,"static")));

// Note: Cookie set once is sent everytime a request is made to the server
var setCookie = cookie.serialize( 'color', 'red', {
    httpOnly: true,
    maxAge: 300, // 60 seconds
    path: "user"
});//serialize(name, value) returns a string

var cookies = cookie.parse('foo=bar; fruit=apple; color=red; equation=E%3Dmc%5E2');

var CookieArray =new Array();

var cookie1 = cookie.serialize('Name', 'A.Shrikant', {
    path: "/user",
    httpOnly: false,
    maxAge: 60 // 60 seconds
});
CookieArray.push(cookie1);

var cookie2 = cookie.serialize("Age", 23, {
    httpOnly: true,
    maxAge: 60 // 60 seconds
});
CookieArray.push(cookie2);

app.get("/", (req, res)=>{
    console.log("###############");
    console.log(req.headers.cookie);
    console.log(typeof cookies);//typeof setCookie is string
    console.log(setCookie);// Output: foo=bar
    console.log(typeof cookies);//typeof setCookie is object
    console.log(cookies);// Output: { foo: 'bar', equation: 'E=mc^2' }

    // for(x in cookie){
    //     console.log(x);
    // }
    //The above for loop returns:
    //parse
    //serialize

    //res.sendFile(__dirname+"/static/index.html");
    res.setHeader('Set-Cookie', setCookie);
    res.end();
    console.log(app.get('env'));
});

app.get("/user", (req, res)=>{
    var cookiesRecieved = cookie.parse(req.headers.cookie || "");
    res.clearCookie("foo");
    res.clearCookie("color");
    //res.send(cookiesRecieved.Name);
    res.send();
    console.log(typeof cookiesRecieved);//typeof cookieReceived is: object
    console.log(cookiesRecieved);
    console.log(typeof req.headers.cookie);//typeof req.headers.cookie is string
    console.log(req.headers.cookie);// O/P is: Name=A.Shrikant; Age=23
});

var server = http.createServer(app).listen(app.get('port'), ()=>{
    console.log("Express server running on port "+app.get('port'));
});
const { response } = require('express');
const express = require('express')
const app = express()

/* Note we don't have to use body-parser module to parse the 
application/x-www-form-urlencoded which is the form data. This is because that functionality 
is available in express 4.16.0 onwards. */
app.use(express.urlencoded({extended: false}));

/* Note we don't have to use body-parser module to parse the 
application/json which is the json data. This is because that functionality 
is available in express 4.16.0 onwards. */
app.use(express.json());

app.get('/user/:id/:name', (req, res) => {
    // req.params is used to extract the path parameters
    console.log(req.params);
    console.log(req.params.id);
    console.log(req.body);
    res.send('User id: ' + req.params.id);
})

app.post('/login', (req, res)=> {
    let username = req.body.username;
    let password = req.body.password;

    console.log(req.body);
    console.log("username: " + username);
    console.log("password: " + password);

    /* If any key in the json object we are sending back to the client is undefined then 
    it is omitted from that json object by default. */ 
    res.send({"username": username, "password": password});
})

const server = app.listen(3001, ()=> {
    console.log("Server started at: " + server.address().port);
});
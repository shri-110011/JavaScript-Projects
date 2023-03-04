//This code will help load the .env file into the process.env
require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser');
const app = express()

const jwt = require('jsonwebtoken')

app.use(express.json())
// app.use(bodyParser.json());

const posts = [
    {
        username: "A.Shrikant",
        title: "Admin"
    },
    {
        username: "A.Siddharth",
        title: "General User"
    }
]

app.get("/posts", authenticateToken, (req, res)=>{
    console.log("req.user: "+req.body)
    res.json(posts.filter(post=> post.username === req.user.name))
});

app.post("/login", (req, res)=>{
    //Authenticate User

    const username = req.body.username
    const user = {name: username}

    //First argument of the sign() is an object we want to serialize i.e. we created our object user containing the username.
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    console.log("Inside login")
    //Note: Here we are converting the object into a string i.e. why we get [object Object]
    //console.log("req.body: "+req.body)
    //console.log("req.body.username: "+req.body.username)
    //console.log("user: "+user)
    //console.log("username: "+username)
    //console.log("user.username: "+user.name)
    // for (x in req.body)
    //     console.log("#: "+x);
    res.json({accessToken: accessToken, user: req.body});

});

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]
    console.log("Authenticating Token")
    //console.log("Authorization Header: "+authHeader)
    //console.log("req.body: "+req.body)
    //console.log("req.user: "+req.user)
    if(token == null) 
        res.sendStatus(401)
    else{
        console.log("Token: "+token);
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
            if(err) {
                console.log("Error###############################")
                return res.sendStatus(403)
            }  
            req.user = user
            next()
        });
    }
}

app.get("/dummy1", (req, res)=>{
    console.log(req.body)
    res.sendStatus(200);
});

app.post("/dummy2", (req, res)=>{
    console.log(req.body)
    res.sendStatus(200);
});

app.listen(3000, ()=> {
    console.log("Server running on port: "+ 3000)
    //console.log("Access Token: "+process.env.ACCESS_TOKEN_SECRET)
})
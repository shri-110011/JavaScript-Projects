//This code will help load the .env file into the process.env
require('dotenv').config()

const express = require('express')
const app = express()

const jwt = require('jsonwebtoken')

app.use(express.json())

let validRefreshTokens = []

app.post("/token", (req, res)=>{
    const refreshToken = req.body.token
    console.log("Inside token")
    console.log(req.body)
    if(refreshToken == null) {
        console.log("refreshToken is null")
        return res.sendStatus(401)
    }
    if(!validRefreshTokens.includes(refreshToken)) {
        console.log("Valid refrehTokens: "+validRefreshTokens)
        console.log("refreshToken is invalid")
        return res.sendStatus(401)
    }
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user)=>{
        console.log(user)
        accessToken = generateAccessToken({name: user.name})
        res.json({accessToken: accessToken})
    });
});

app.post("/logout", (req,res)=>{
    refreshToken = req.body.token;
    validRefreshTokens = validRefreshTokens.filter(token=> token != refreshToken)
    res.sendStatus(204)
});

app.post("/login", (req, res)=>{
    //Authenticate User

    const username = req.body.username
    const user = {name: username}

    //First argument of the sign() is an object we want to serialize i.e. we created our object user containing the username.
    const accessToken = generateAccessToken(user);
    const refreshToken  = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
    console.log("Inside login")
    validRefreshTokens.push(refreshToken)
    console.log(validRefreshTokens)
    //Note: Here we are converting the object into a string i.e. why we get [object Object]
    //console.log("req.body: "+req.body)
    //console.log("req.body.username: "+req.body.username)
    //console.log("user: "+user)
    //console.log("username: "+username)
    //console.log("user.username: "+user.name)
    // for (x in req.body)
    //     console.log("#: "+x);
    res.json({accessToken: accessToken, refreshToken: refreshToken})

});

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '40s'})
}



app.listen(4000, ()=> {
    console.log("Server running on port: "+ 4000)
    //console.log("Access Token: "+process.env.ACCESS_TOKEN_SECRET)
})
const express = require('express');
const app = express();
require("./mongoose/db/defaultDB");

const courseRouter = require('./courses/courses.router');

app.use(express.json());
app.use((req, res, next)=> {
    console.log("Request Type: " + req.method);
    console.log("Request url: " + req.url);
    console.log(req.body);
    next();
})
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
    if(req.method === "Options") {
        return res.statusCode(200).json();
    }
    next();
})
app.use("/courses", courseRouter);


const server = app.listen(3001, ()=> {
    console.log("Express server started at: " + server.address().port);
})
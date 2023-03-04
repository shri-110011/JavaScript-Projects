const express = require('express');
const app = express();
require("./mongoose/connect_db/mongoose");

const userRouter = require('./users/users.router');

app.use(express.json());
app.use((req, res, next)=> {
    console.log("Request Type: " + req.method);
    console.log("Request url: " + req.url);
    next();
})
app.use("/users", userRouter);


const server = app.listen(3000, ()=> {
    console.log("Express server started at: " + server.address().port);
})
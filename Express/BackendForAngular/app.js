const express = require('express');
const path = require('path');
const app = express();


app.set('port', process.env.PORT || 3000);

app.use('/public', express.static(path.join(__dirname, 'static1')));

app.get("/user", (req, res)=>{
    res.sendFile(path.join(__dirname, "/static1/index.html"));
});

//Code to create the local server
app.listen(app.get("port"), ()=>{
    console.log("Express server running on port "+app.get('port'));
});
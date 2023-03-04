const express = require('express');
const path = require('path');
const http = require('http');
const session = require('express-session');

const app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');


app.use('/public', express.static(path.join(__dirname,"static")));
app.use(session({
    secret: "seret-key",
    resave: false,
    saveUninitialized: false,
    name: 'viewCount'
}));

//let viewcount = 0;
app.get("/", (req, res)=>{
    if(req.session.viewCount){
        //console.log(true);
        req.session.viewCount += 1;
    }
    else{
        //console.log(false);
        req.session.viewCount = 1;
    }
   
    console.log(req.session.viewCount);
    console.log(req.sessionID);
    //console.log(req.session);// req.session returns a session object
    //console.log(typeof session);// typeof session: fuunction
    //console.log(session);
    //console.log(session.Session);
    //viewcount += 1;
    res.render(__dirname+"/static/index2", {viewCount: req.session.viewCount});
});

var server = http.createServer(app).listen(app.get('port'), ()=>{
    console.log("Express server running on port "+app.get('port'));
});
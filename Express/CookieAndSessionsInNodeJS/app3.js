const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const session = require('express-session');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({'extended':false}));
app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(session({
    secret: "384756",
    resave: false,
    saveUninitialized: false,
    name: 'userLoginStatus'
}));

app.get('/', (req, res)=>{
    res.render(path.join(__dirname, "static", "loginPage"), {errorMsg:""});
    console.log("Inside /");
    console.log(req.session.userLoginStatus);
});

app.get('/homePage', (req, res)=>{
    if(req.session.userLoginStatus == "True"){
        res.setHeader('Cache-Control', 'no-store')
        res.render(path.join(__dirname, "static", "homePage"));
    }
    else{
        res.redirect("/");
    }
    console.log("Inside /homePage");
    console.log(req.session.userLoginStatus);
});

app.post('/loginHandler', (req, res)=>{
    console.log(req.body);
    if(req.body.uname=="shri" && req.body.pwd=="1234"){
        req.session.userLoginStatus = "True";
        res.redirect("/homePage");
    }
    else{
        res.redirect("/");
    }
    console.log("Inside /loginHandler");
    console.log(req.session.userLoginStatus);
 });

app.post('/logoutHandler', (req, res)=>{
    req.session.userLoginStatus = "False";
    res.redirect("/");
    console.log("Inside /logoutHandler");
    console.log(req.session.userLoginStatus);
});

//Code to create the local server
app.listen(app.get("port"), ()=>{
    console.log("Express server running on port "+app.get('port'));
});
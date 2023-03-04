const server = require('./server.js');
const router = require("./router.js");
const handler = require("./handler.js");

handle = {};

handle['/']=handler.home;
handle['/home']=handler.home;
handle['/seePostedData']=handler.seePostedData;

server.runServer(router.route, handle);

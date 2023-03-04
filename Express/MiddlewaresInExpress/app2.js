const express = require('express')
const app = express()
/* Load router-level middleware by using the router.use() and router.METHOD() functions.
Router-level middleware works in the same way as application-level middleware, except it 
is bound to an instance of express.Router(). 
*/
const router = express.Router();

/* a middleware function with no mount path. This code is executed for every request to 
the router */
router.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
})
  
/* a middleware sub-stack shows request info for any type of HTTP request to the 
/user/:id path */
router.use('/user/:id', (req, res, next) => {
    console.log('Request URL:', req.originalUrl);
    next();
}, (req, res, next) => {
    console.log('Request Type:', req.method);
    next();
})
  
// a middleware sub-stack that handles GET requests to the /user/:id path
router.get('/user/:id', (req, res, next) => {
// if the user ID is 0, skip to the next router
if (req.params.id === '0') next('route')
// otherwise pass control to the next middleware function in this stack
else next()
}, (req, res, next) => {
    res.send('regular')
    next()
}, (res, req, next)=> {
     /* To skip the rest of the router’s middleware functions, call next('router') to 
    pass control back out of the router instance. */
    next("router");
})
  
// handler for the /user/:id path, which renders a special page
router.get('/user/:id', (req, res, next) => {
    console.log(req.params.id)
    res.send('special')
})

// mount the router on the app
app.use('/', router);

// The order of middleware is important.
app.use((req, res, next)=> {
    console.log("Inside application level middleware");
    next();
});

const server = app.listen(3001, ()=> {
    console.log("Server started at: " + server.address().port);
});

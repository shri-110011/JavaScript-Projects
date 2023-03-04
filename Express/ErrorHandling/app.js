const express = require('express');
const router = require('./routes');
const apiErrorHandler = require('./error/api-error-handler');
const app = express();

app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use("/", router);
app.use(apiErrorHandler);

app.listen(app.get("port"), ()=>{
    console.log("Express server running on port "+app.get('port'));
});
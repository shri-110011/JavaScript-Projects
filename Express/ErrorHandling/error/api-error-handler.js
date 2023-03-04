const ApiError = require("./ApiError");

function apiErrorHandler(err, req, res, next){
    console.error(err);

    if(err instanceof ApiError){
        res.status(err.code).send(err.message);
        console.log("#");
        return;
    }
    //res.status(500).json("something went wrong");
}
module.exports = apiErrorHandler;
const ApiError = require("../error/ApiError");

class TweetController {
    tweet(req, res, next){
        const {msg} = req.body;
        console.log(req.body);
        if(!msg){
            //res.status(400).json('msg is required');
            next(ApiError.badRequest("msg field is required and it can't be blank"));
            console.log("1");
            return;
        }
        console.log("2");
        next(ApiError.internalError("something broke down"));
        //next({});
        //res.sendStatus(201);
    }
}
module.exports = new TweetController();
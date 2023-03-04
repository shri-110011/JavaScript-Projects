class ApiError{
    constructor(code, message){
        this.code = code;
        this.message = message;
    }
    static badRequest(msg){
        return new ApiError(400, msg);
    }
    static internalError(msg){
        return new ApiError(500, msg);
    }
}
module.exports = ApiError;

var err = new ApiError(200, "Ok");
console.log(err);
console.log(err instanceof ApiError);
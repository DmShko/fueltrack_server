const {isValidObjectId} = require("mongoose");
const {HttpError} = require("../helpers");

const isValidId = (req, res, next) => {
    const { id } = req.params;
    
    const nanoidPattern = /^[A-Za-z0-9_-]{21,24}$/;

    // if(!isValidObjectId(id)){
       
    //     next(HttpError(400, `${id} is not valid id`))
    // }
    // next();

    if(!id || !nanoidPattern.test(id)){
       
        next(HttpError(400, `${id} is not valid id`))
    }
    next();
};

module.exports = isValidId;
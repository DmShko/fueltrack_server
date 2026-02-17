const handleMongooseError = (error, data, next)=> {

    const { name, code} = error;
    console.log(error)
    error.status = name === "MongoServerError" && code === 11000 ? 409 : 400; //code - 11000, when sach email exist.

    next();
};

module.exports = handleMongooseError;
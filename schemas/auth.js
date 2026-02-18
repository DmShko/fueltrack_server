const Joi = require("joi");

const checkRegister = Joi.object({
    
    company: Joi.string().pattern(/\w{0}[0-9a-zA-Za-яА-Я]/).required(),
    name: Joi.string().pattern(/\w{0}[0-9a-zA-Za-яА-Я]/).required(),
    email: Joi.string().pattern(/\w{0}[0-9a-zA-Za-яА-Я]+@\w{0}[0-9a-zA-Za-яА-Я]+\.\w{0}[0-9a-zA-Za-яА-Я]/).required(),
    password: Joi.string().min(8).required(),
    bossId: Joi.string().optional().allow(''),
});

// for reverificate email
const emailSchema = Joi.object({
    email: Joi.string().pattern(/\w{0}[0-9a-zA-Za-яА-Я]+@\w{0}[0-9a-zA-Za-яА-Я]+\.\w{0}[0-9a-zA-Za-яА-Я]/).required(),
});

const checkSignin = Joi.object({

    email: Joi.string().pattern(/\w{0}[0-9a-zA-Za-яА-Я]+@\w{0}[0-9a-zA-Za-яА-Я]+\.\w{0}[0-9a-zA-Za-яА-Я]/).required(),
    password: Joi.string().min(8).required(),

});

module.exports = {
    checkRegister,
    emailSchema,
    checkSignin,
};
const Joi = require("joi");

const trackSchema = Joi.object({
  _id: Joi.string().required(),
  liters: Joi.string().allow(''),
  marck: Joi.string().allow(''),
  price: Joi.string().allow(''),
  km: Joi.string().allow(''),
  pay: Joi.string().allow(''),
  burn: Joi.string().required(),
  date: Joi.string().required(),
});

module.exports = { trackSchema };
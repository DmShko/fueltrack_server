const Joi = require("joi");

const trackSchema = Joi.object({
  _id: Joi.string().required(),
  fuel: Joi.string().allow(''),
  refuel_liters: Joi.string().allow(''),
  km_day: Joi.string().allow(''),
  liters_day: Joi.string().allow(''),
});

module.exports = { trackSchema };
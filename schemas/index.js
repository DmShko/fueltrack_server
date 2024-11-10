const { trackSchema } = require('./track');
const {
  checkRegister,
  emailSchema,
  checkSignin,
} = require("./auth");  

module.exports = {
      
  trackSchema,
  checkRegister,
  emailSchema,
  checkSignin,
      
};
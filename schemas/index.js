const { trackSchema } = require('./track');
const {
  checkRegister,
  emailSchema,
  checkLogin,
} = require("./auth");  

module.exports = {
      
  trackSchema,
  checkRegister,
  emailSchema,
  checkLogin,
      
};
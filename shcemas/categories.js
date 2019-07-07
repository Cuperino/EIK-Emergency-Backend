// Categories
// Import data validation tool
var Joi = require('joi');
// Define and export Scheme
module.exports = Joi.object().keys({
  _rev: Joi.string(),
  _id: Joi.string(),
  name: Joi.string().required().max(50, 'utf8'),
  image: Joi.string(),
  private: Joi.boolean().required(),

});

// Locations
// Import data validation tool
var Joi = require('joi');
// Define and export Scheme
module.exports = Joi.object().keys({
  _rev: Joi.string(),
  _id: Joi.string(),
  name: Joi.string().required().max(50, 'utf8'),
  lat: Joi.number().required(),
  lng: Joi.number().required(),

});

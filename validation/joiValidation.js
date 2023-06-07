const Joi = require('joi');

const addLesonSchema = Joi.object({
  title: Joi.string().required(),
  teacher: Joi.string(),
  // date: Joi.string(),
  // time: Joi.string(),
  lesonLink: Joi.string().required(),

})
const updateContactSchema = Joi.object({
  title: Joi.string(),
  teacher: Joi.string(),
  // date: Joi.string(),
  // time: Joi.string(),
  lesonLink: Joi.string(),

})
const updateFavoriteSchema = Joi.object({
  favorite:Joi.boolean().required(),
})
const registerAuthSchema = Joi.object({
  name:Joi.string().required(),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  subscription: Joi.string(),
  password:Joi.string().required()
})
const loginAuthSchema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  password:Joi.string().required()
})
const updateSubscriptionShema=Joi.object({
  subscription: Joi.string().valid('starter', 'pro', 'business').required(),
})

module.exports = {
  addLesonSchema,
  updateContactSchema,
  updateFavoriteSchema,
  registerAuthSchema,
  loginAuthSchema,
  updateSubscriptionShema
    
}
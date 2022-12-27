const mongoose = require("mongoose");
const Joi = require("joi");
var uniqueValidator = require("mongoose-unique-validator");

// const User = require("./user");

const portfolioSchema = new mongoose.Schema({
  // handle: { type: String, required: true, unique: true },
  handle: { type: String, required: true, unique: true },
  userId: { type: String },
  resume: { type: Array },
});
portfolioSchema.plugin(uniqueValidator);

const Portfolio = mongoose.model("portfolio", portfolioSchema);
const validate = (data) => {
  const schema = Joi.object({
    // enum: Joi.string().required(),
    userId: Joi.string(),
    handle: Joi.string().required(),
    resume: Joi.array().items(Joi.string()),
  });
  return schema.validate(data);
}; //adding validations

module.exports = { Portfolio, validate };

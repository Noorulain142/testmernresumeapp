const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const Joi = require("joi");
const passwordComplexity = require("joi-password-complexity");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ id: this._id }, process.env.JWTPRIVATEKEY, {
    expiresIn: "7d",
  });
  return token;
};

const User = mongoose.model("user", userSchema);
const validate = (data) => {
  const schema = Joi.object({
    name: Joi.string().required().label("name"),
    email: Joi.string().required().label("email"),
    password: passwordComplexity().required().label("password"),
  });
  return schema.validate(data);
}; //adding validations

module.exports = { User, validate };

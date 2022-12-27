const mongoose = require("mongoose");
const Joi = require("joi");

// const User = require("./user");

const resumeSchema = new mongoose.Schema({
  status: {
    type: String,
    enum: ["DRAFT", "LIVE"],
    default: "DRAFT",
  },
  email: { type: String, required: true },
  mobile: { type: Number },
  achievements: { type: String },
  interests: { type: String },
  skills: { type: String },
  experiences: { type: String },
  address: { type: String },
  userId: { type: String },
  education: { type: String },
  reference: { type: String },
  image: {
    data: Buffer,
    ContentType: String,
  },
  // education: {
  //   school: { type: String, required: true },
  //   college: { type: String, required: true },
  //   university: { type: String, required: true },
  // },
});

const Resume = mongoose.model("resume", resumeSchema);
const validate = (data) => {
  const schema = Joi.object({
    // status: Joi.string(),
    email: Joi.string().label("email"),
    mobile: Joi.string().label("mobile"),
    achievements: Joi.string().label("achievements"),
    interests: Joi.string().label("interests"),
    education: Joi.string().label("education"),
    // education: {
    //   school: Joi.string().label("school"),
    //   college: Joi.string().label("college"),
    //   university: Joi.string().label("university"),
    // }.required(),
    address: Joi.string().label("address"),
    skills: Joi.string().label("skills"),
    experiences: Joi.string().label("experiences"),
    reference: Joi.string().label("reference"),
    userId: Joi.string(),
  });
  return schema.validate(data);
}; //adding validations

module.exports = { Resume, validate };

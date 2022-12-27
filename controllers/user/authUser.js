const { User } = require("../../models/user");
const bcrypt = require("bcrypt");
const Joi = require("joi");

const authUser = async (req, res) => {
  try {
    console.log(req);
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    const user = await User.findOne({ email: req.body.email });

    if (!user)
      return res.status(401).send({ message: "invalid email or password" });

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword)
      return res.status(401).send({ message: "invalid email or password" });

    // const token = user.generateAuthToken();
    res.status(200).send({ user, message: "logged in successfully" });
  } catch (error) {
    res.status(500).send({ message: "internal server error" });
  }
};

const validate = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("email"),
    password: Joi.string().required().label("password"),
  });
  return schema.validate(data);
};

module.exports = { authUser, validate };

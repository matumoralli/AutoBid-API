const { response } = require("../utils");
const { User } = require("../models");

module.exports = async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  const newUser = await User.create({
    name,
    email,
    password,
  });

  response(res, 201, newUser);
};

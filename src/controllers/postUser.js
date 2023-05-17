const { response } = require("../utils");
const { User } = require("../db");

module.exports = async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = await User.create({
    name,
    email,
    password,
    isActive: true,
    isAdmin: false,
  });

  response(res, 201, newUser);
};

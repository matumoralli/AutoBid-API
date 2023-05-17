const Users = require("../data/users");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const users = await Users.list();
  response(res, 200, users);
};

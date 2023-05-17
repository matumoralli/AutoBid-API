const Users = require("../data/users");
const { response } = require("../utils");
const { ClientError } = require("../utils/errors");

module.exports = async (req, res) => {
  const users = await Users.list();
  if (users) response(res, 200, users);
  else throw new ClientError("No users found", 404);
};

const usersServices = require("../../services/users");
const { response } = require("../../utils");
const { ClientError } = require("../../utils/errors");

async function getUsers(req, res) {
  const users = await usersServices.list();
  if (users) response(res, 200, users);
  else throw new ClientError("No users found", 404);
}

async function postUser(req, res) {
  const newUser = await usersServices.create(req.body);
  if (newUser) response(res, 201, newUser);
  else throw new ClientError("Error creating user", 404);
}

module.exports = { getUsers, postUser };

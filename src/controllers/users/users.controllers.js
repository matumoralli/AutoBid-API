const usersServices = require("../../services/users");
const { response } = require("../../utils");
const { ClientError } = require("../../utils/errors");
const { welcomeEmail} = require("../../services/mailing/index")
async function getUsers(req, res) {
  const users = await usersServices.list();
  if (users) response(res, 200, users);
  else throw new ClientError("No users found", 404);
}

async function postUser(req, res) {
  const newUser = await usersServices.create(req.body);
  if (newUser){
    welcomeEmail(req.body.email)
   return response(res, 201, newUser);
  }
  else throw new ClientError("Error creating user", 404);
}

async function banUser(req, res) {
  const banned = await usersServices.ban(req.body.userId);//error
  if(banned.isActive) {
    response(res, 200, "user unbanned succesfully")
  } else if (!banned.isActive) {
    response(res, 200, "user banned succesfully")
  } else throw new ClientError("Error changing user status", 404);
}

module.exports = { getUsers, postUser, banUser };

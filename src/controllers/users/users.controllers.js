const usersServices = require("../../services/users");
const { response } = require("../../utils");
const { ClientError } = require("../../utils/errors");
const { welcomeEmail } = require("../../services/mailing/index");

async function getUsers(req, res) {
  const users = await usersServices.list();
  if (users) response(res, 200, users);
  else throw new ClientError("No users found", 404);
}

async function postUser(req, res) {
  const newUser = await usersServices.fetchOrCreate(req);
  if (newUser) {
    // welcomeEmail(req.body.email);
    return response(res, 201, newUser);
  } else throw new ClientError("Error creating user", 404);
}

async function giveCredit(req, res) {
  const userWCredit = await usersServices.giveCredit(req);
  if (userWCredit) {
    return response(res, 201, userWCredit);
  } else throw new ClientError("Error creating credit for user", 404);
}

async function removeCredit(req, res) {
  const userWOCredit = await usersServices.removeCredit(req);
  if (userWOCredit) {
    return response(res, 201, userWOCredit);
  } else throw new ClientError("Error removing credit from user", 404);
}

async function banUser(req, res) {
  const banned = await usersServices.ban(req.body.userId); //error
  if (banned.isActive) {
    response(res, 200, "user unbanned succesfully");
  } else if (!banned.isActive) {
    response(res, 200, "user banned succesfully");
  } else throw new ClientError("Error changing user status", 404);
}

async function populateDB(req, res) {
  console.log('llegamos al controller')
  const newUsers = await usersServices.populateDB();
  if (newUsers) response(res, 201, newUsers);
  else throw new ClientError("Error populating DB", 400);
}

module.exports = { getUsers, postUser, giveCredit, removeCredit, banUser, populateDB };

const usersServices = require("../../services/users");
const { response } = require("../../utils");
const { ClientError } = require("../../utils/errors");
const { welcomeEmail } = require("../../services/mailing/index");

async function getUsers(req, res) {
  const users = await usersServices.list();
  if (users) response(res, 200, users);
  else throw new ClientError("No users found", 404);
}

async function getUserAuctions(req, res) {
  const auctions = await usersServices.listAuctions(req);
  if (auctions) response(res, 200, auctions);
  else throw new ClientError("No auctions found", 404);
}

async function postUser(req, res) {
  const newUser = await usersServices.fetchOrCreate(req);
  if (newUser) {
    // welcomeEmail(req.body.email);
    return response(res, 201, newUser);
  } else throw new ClientError("Error creating user", 404);
}

async function giveUserCredit(req, res) {
  const createdCredit = await usersServices.giveUserCredit(req);
  if (createdCredit) {
    return response(res, 201, createdCredit);
  } else throw new ClientError("Error creating credit for user", 404);
}

async function deleteUserCredit(req, res) {
  const deletedCredit = await usersServices.deleteUserCredit(req);
  if (deletedCredit) {
    return response(res, 201, deletedCredit);
  } else throw new ClientError("Error deleting credit from user", 404);
}

async function assignAuctionCredit(req, res) {
  const assignedCredit = await usersServices.assignAuctionCredit(req);
  if (assignedCredit) {
    return response(res, 201, assignedCredit);
  } else throw new ClientError("Error assigning credit to auction", 404);
}

async function removeAuctionCredit(req, res) {
  const removedCredit = await usersServices.removeAuctionCredit(req);
  if (removedCredit) {
    return response(res, 201, removedCredit);
  } else throw new ClientError("Error removing credit from auction", 404);
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
  console.log("llegamos al controller");
  const newUsers = await usersServices.populateDB();
  if (newUsers) response(res, 201, newUsers);
  else throw new ClientError("Error populating DB", 400);
}

module.exports = {
  getUsers,
  getUserAuctions,
  postUser,
  giveUserCredit,
  deleteUserCredit,
  assignAuctionCredit,
  removeAuctionCredit,
  banUser,
  assignAuctionCredit,
  populateDB,
};

const { catchedAsync } = require("../../utils");
const {
  getUsers,
  postUser,
  banUser,
  populateDB,
  giveUserCredit,
  deleteUserCredit,
  removeAuctionCredit,
  assignAuctionCredit,
} = require("./users.controllers");

module.exports = {
  getUsers: catchedAsync(getUsers),
  postUser: catchedAsync(postUser),
  banUser: catchedAsync(banUser),
  populateDB: catchedAsync(populateDB),
  giveUserCredit: catchedAsync(giveUserCredit),
  deleteUserCredit: catchedAsync(deleteUserCredit),
  removeAuctionCredit: catchedAsync(removeAuctionCredit),
  assignAuctionCredit: catchedAsync(assignAuctionCredit),
};

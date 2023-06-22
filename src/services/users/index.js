const { fetchUsers, fetchUserAuctions, fetchOrCreate, banUser, populateDB, giveUserCredit, deleteUserCredit, assignAuctionCredit, removeAuctionCredit } = require("./users.service");

module.exports = {
  list: async () => await fetchUsers(),
  listAuctions: async (req) => await fetchUserAuctions(req),
  fetchOrCreate: async (req) => await fetchOrCreate(req),
  ban: async (req) => await banUser(req),
  populateDB: async () => await populateDB(),
  giveUserCredit: async (req) => await giveUserCredit(req),
  deleteUserCredit: async (req) => await deleteUserCredit(req),
  assignAuctionCredit: async (req) => await assignAuctionCredit(req),
  removeAuctionCredit: async (req) => await removeAuctionCredit(req),
};

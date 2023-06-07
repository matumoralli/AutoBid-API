const { fetchUsers, fetchOrCreate, banUser, populateDB, giveCredit } = require("./users.service");

module.exports = {
  list: async () => await fetchUsers(),
  fetchOrCreate: async (req) => await fetchOrCreate(req),
  ban: async (req) => await banUser(req),
  populateDB: async () => await populateDB(),
  giveCredit: async (req) => await giveCredit(req),
};

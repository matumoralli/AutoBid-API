const { fetchUsers, fetchOrCreate, banUser, populateDB } = require("./users.service");

module.exports = {
  list: async () => await fetchUsers(),
  fetchOrCreate: async (req) => await fetchOrCreate(req),
  ban: async (req) => await banUser(req),
  populateDB: async () => await populateDB(),
};

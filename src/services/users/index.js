const { fetchUsers, createUser, banUser, populateDB } = require("./users.service");

module.exports = {
  list: async () => await fetchUsers(),
  create: async (req) => await createUser(req),
  ban: async (req) => await banUser(req),
  populateDB: async () => await populateDB(),
};

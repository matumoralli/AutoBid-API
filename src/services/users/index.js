const { fetchUsers, createUser, banUser } = require("./users.service");

module.exports = {
  list: async () => await fetchUsers(),
  create: async (req) => await createUser(req),
  ban: async (req) => await banUser(req)
};

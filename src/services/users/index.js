const { fetchUsers, createUser } = require("./users.service");

module.exports = {
  list: async () => await fetchUsers(),
  create: async (req) => await createUser(req),
};

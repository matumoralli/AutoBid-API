const fetchUsers = require("./fetchUsers");

module.exports = {
  list: async () => await fetchUsers(),
};

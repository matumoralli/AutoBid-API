const { catchedAsync } = require("../../utils");
const { getUsers, postUser } = require("./users.controllers");

module.exports = {
  getUsers: catchedAsync(getUsers),
  postUser: catchedAsync(postUser),
};

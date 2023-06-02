const { catchedAsync } = require("../../utils");
const { getUsers, postUser, banUser, populateDB } = require("./users.controllers");

module.exports = {
  getUsers: catchedAsync(getUsers),
  postUser: catchedAsync(postUser),
  banUser: catchedAsync(banUser),
  populateDB: catchedAsync(populateDB),
};

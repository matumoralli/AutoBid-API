const { catchedAsync } = require("../../utils");
const { getUsers, getUser, postUser, banUser, populateDB } = require("./users.controllers");

module.exports = {
  getUsers: catchedAsync(getUsers),
  postUser: catchedAsync(postUser),
  banUser: catchedAsync(banUser),
  populateDB: catchedAsync(populateDB),
};

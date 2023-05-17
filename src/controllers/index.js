const { catchedAsync } = require("../utils");

module.exports = {
  getCars: catchedAsync(require("./getCars")),
  getUsers: catchedAsync(require("./getUsers")),
  postUser: catchedAsync(require("./postUser")),
};

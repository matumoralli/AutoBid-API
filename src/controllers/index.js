const { catchedAsync } = require("../utils");

module.exports = {
  getCars: catchedAsync(require("./getCars")),
};

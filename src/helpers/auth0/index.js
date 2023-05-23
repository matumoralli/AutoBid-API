const { catchedAsync } = require("../../utils");
const { auth0Helper } = require("./auth0.helpers");

module.exports = {
  auth0Helper: catchedAsync(auth0Helper),
};

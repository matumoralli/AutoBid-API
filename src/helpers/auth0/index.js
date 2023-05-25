const { catchedAsync } = require("../../utils");
const { auth0Helper } = require("./auth0.helpers");

module.exports = {
  auth0Helper: (userID, action, data) => catchedAsync(auth0Helper(userID, action, data)),
};

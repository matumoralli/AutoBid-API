const { catchedAsync } = require("../../utils");
const { getAuctions } = require("./auctions.controllers");

module.exports = {
  getAuctions: catchedAsync(getAuctions),
};

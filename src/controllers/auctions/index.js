const { catchedAsync } = require("../../utils");
const { getAuctions, getAuction, putAuction } = require("./auctions.controllers");

module.exports = {
  getAuctions: catchedAsync(getAuctions),
  getAuction: catchedAsync(getAuction),
  putAuction: catchedAsync(putAuction),
};

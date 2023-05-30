const { catchedAsync } = require("../../utils");
const { getAuctions, postAuction} = require("./auctions.controllers");

module.exports = {
  getAuctions: catchedAsync(getAuctions),
  postAuction: catchedAsync(postAuction),
};

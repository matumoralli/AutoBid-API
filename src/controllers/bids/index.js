const { catchedAsync } = require("../../utils");
const { postBid } = require('./bids.controllers')

module.exports = {
  postBid: catchedAsync(postBid)
}
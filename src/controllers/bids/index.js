const { catchedAsync } = require("../../utils");
const { postBid, getBid } = require('./bids.controllers')

module.exports = {
  postBid: catchedAsync(postBid),
  getBid: catchedAsync(getBid)
}
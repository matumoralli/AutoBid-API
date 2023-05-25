const { createAuction } = require("./auctions.service")

module.exports = {
  create: async (req) => createAuction(req)
}
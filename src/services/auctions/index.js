const { createAuction } = require("./auctions.service")
const { fetchAuctions} = require("./auctions.service")

module.exports = {
  create: async (req) => createAuction(req),
  list: async () => await fetchAuctions(),
}
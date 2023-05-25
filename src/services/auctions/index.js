const { fetchAuctions, createAuction} = require("./auctions.service")

module.exports = { 
    list: async () => await fetchAuctions(),
    create: async (req) => createAuction(req)
}
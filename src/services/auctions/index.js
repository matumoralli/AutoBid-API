const { fetchAuctions, createAuction, fetchAuction, editAuction} = require("./auctions.service")

module.exports = { 
    list: async (req) => await fetchAuctions(req),
    get: async (req) => await fetchAuction(req),
    create: async (req) => createAuction(req),
    edit: async (req) => editAuction(req)
}
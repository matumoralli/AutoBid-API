const { fetchAuctions} = require("./auctions.service")


module.exports = { 
    list: async () => await fetchAuctions(),
}
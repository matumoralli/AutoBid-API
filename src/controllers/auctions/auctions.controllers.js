const auctionServices = require("../../services/auctions");
const { response } = require("../../utils");
const { ClientError } = require("../../utils/errors");


async function getAuctions(req,res) {
    const auctions = await auctionServices.list();
    if(auctions) response(res, 200, auctions)
    else throw new ClientError("Not Auctions found", 404); 
}


module.exports = {getAuctions};
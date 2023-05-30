const auctionServices = require("../../services/auctions");
const { response } = require("../../utils");
const { ClientError } = require("../../utils/errors");


async function getAuctions(req,res) {
    const auctions = await auctionServices.list();
    if(auctions) response(res, 200, auctions)
    else throw new ClientError("Not Auctions found", 404); 
}

async function postAuction(req, res) {
  const newAuction = await auctionServices.create(req.body);
  if (newAuction) response(res, 201, newAuction);
  else throw new ClientError("Error creating auction", 400);
}


module.exports = {getAuctions, postAuction};
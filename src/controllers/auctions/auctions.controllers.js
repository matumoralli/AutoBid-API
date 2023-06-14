const auctionServices = require("../../services/auctions");
const { response } = require("../../utils");
const { ClientError } = require("../../utils/errors");


async function getAuctions(req,res) {
    const auctions = await auctionServices.list(req);
    if(auctions) response(res, 200, auctions)
    else throw new ClientError("Not Auctions found", 404); 
}


async function getAuction(req,res) {
    const auction = await auctionServices.get(req);
    if(auction) response(res, 200, auction);
    else throw new ClientError("Auction Not found with ID: "+ req.params.id, 400)

}

async function putAuction(req, res) {
    const newAuction = await auctionServices.edit(req);
    if(newAuction) response(res,200, newAuction);
    else throw new ClientError("Error editing the giveaway with ID "+req.params.id, 400)
}


async function postAuction(req, res) {
  const newAuction = await auctionServices.create(req.body);
  if (newAuction) response(res, 201, newAuction);
  else throw new ClientError("Error creating auction", 400);
}


module.exports = {getAuctions, getAuction, putAuction, postAuction};


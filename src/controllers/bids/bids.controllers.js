const bidsServices = require("../../services/bid")
const { response } = require("../../utils");
const { ClientError } = require("../../utils/errors");

async function postBid(req, res){
  const newBid = await bidsServices.post(req)
  if(newBid) return response(res, 201, newBid)
  else throw new ClientError ("error creating your bid, try again.", 400)
}

async function getBid(req, res){
  const bidDB = await bidsServices.get(req)
  if(bidDB) return response(res, 200, bidDB)
  else throw new ClientError ("Error fetching Bid with given ID", 400)
}

module.exports = { postBid, getBid }
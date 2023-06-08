const bidsServices = require("../../services/bid")
const { response } = require("../../utils");
const { ClientError } = require("../../utils/errors");

async function postBid(req, res){
  const newBid = await bidsServices.post(req.body)
  if(newBid) return response(res, 200, newBid)
  else throw new ClientError ("error creating your bid, try again.", 400)
}

module.exports = { postBid }
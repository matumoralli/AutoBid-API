const { Auction, Bid, User } = require ("../../database/models")

async function postBid({auctionId, userId, ammount}){
  //all info needed.
  const auction = await Auction.findByPk(auctionId, {include:{ model: Bid}});
  const user = await User.findByPk(userId)
  const lastBidAmmount = auction.Bids[auction.Bids.length -1].dataValues.ammount
  
  
  
  const bid = await Bid.create({ammount})
  //relating the bid with the respective user and auction.
  bid.setUser(user.dataValues.id)
  bid.setAuction(auction.dataValues.id)
  return(bid)
}

module.exports = {postBid}
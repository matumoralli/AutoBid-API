const { Auction, Bid, User } = require ("../../database/models")

async function postBid({auctionId, userId, ammount}){
  //all info needed.
  const auction = await Auction.findByPk(auctionId, {include:{ model: Bid}});
  const user = await User.findByPk(userId)
  const lastBidAmmount = auction.Bids[auction.Bids.length -1].dataValues.ammount
  
  try{
    if(lastBidAmmount < 50000){
      if(ammount >= lastBidAmmount + 100){
        console.log(lastBidAmmount + 100)
        const bid = await Bid.create({ ammount:ammount })
        bid.setUser(user.dataValues.id)
        bid.setAuction(auction.dataValues.id)
        return(bid)
      } else {
        return("The bid has to be more than 100 dollars higher than the last one.")
      }
    } else {
      if(ammount >= lastBidAmmount + 250){
        const bid = await Bid.create({ ammount:ammount })
        bid.setUser(user.dataValues.id)
        bid.setAuction(auction.dataValues.id)
        bid.save()
        return(bid)
      } else {
        return("The bid has to be more than 250 dollars higher than the last one.")
      }
      }
  } catch (error){
  console.log("There were an error creating the bid", error.message)
    }
}

module.exports = {postBid}
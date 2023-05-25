const { Auction } = require ('../../database/models')

async function createAuction ({carDetailId, userId, minPrice, sellerType }){
  try{
    const newAuction = Auction.create(minPrice, sellerType)
  } catch (error) {
    console.log("Could not create the auction", error.message)
  }
}

module.exports = { createAuction }
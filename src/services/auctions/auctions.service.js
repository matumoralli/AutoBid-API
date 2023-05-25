const { Auction, Comment } = require("../../database/models");

async function fetchAuctions(params) {
  try {
    return await Auction.findAll({
      include: {
        model: Comment,
      },
    });
  } catch (error) {
    console.log("Could no Fetch AUCTIONS from DB: ", error);
  }

}

async function createAuction ({carDetailId, userId, minPrice, sellerType }){
  try{
    const newAuction = Auction.create(minPrice, sellerType)
  } catch (error) {
    console.log("Could not create the auction", error.message)
  }
}

module.exports = { fetchAuctions, createAuction };
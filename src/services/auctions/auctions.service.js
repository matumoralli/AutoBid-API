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

module.exports = { fetchAuctions };
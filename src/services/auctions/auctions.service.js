const { Auction, Comment, User, CarDetail } = require("../../database/models");

async function fetchAuctions(params) {
  try {
    return await Auction.findAll({
      include: {
        model: Comment,
      },
    });
  } catch (error) {
    console.log("Could not Fetch AUCTIONS from DB: ", error);
  }
}

async function createAuction({ carDetailId, userId, minPrice, sellerType }) {
  try {
    const newAuction = await Auction.create({ minPrice, sellerType });

    let UserId = await User.findOne({
      where: { id: userId },
    });

    let CarDetailId = await CarDetail.findOne({
      where: { id: carDetailId },
    });

    newAuction.setUser(UserId.dataValues.id);
    return newAuction.setCarDetail(CarDetailId.dataValues.id);
  } catch (error) {
    console.log("Could not create the auction", error.message);
  }
}

module.exports = { fetchAuctions, createAuction };

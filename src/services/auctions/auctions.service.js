
const { Auction, Comment, CarDetail, User } = require("../../database/models");


async function fetchAuctions(req) {
  const pageAsNumber = Number.parseInt(req.query.page);
  const sizeAsNumber = Number.parseInt(req.query.size);

  let page = 0;
  if (!Number.isNaN(sizeAsNumber) && sizeAsNumber > 0) {
    page = pageAsNumber;
  }

  let size = 999;
  if (!Number.isNaN(sizeAsNumber) && sizeAsNumber > 0 && sizeAsNumber < 16) {
    size = sizeAsNumber;
  }
  try {
    const auctions = await Auction.findAndCountAll({
      limit: size,
      offset: page * size,
      include: {
        model: User,
        model: CarDetail,
      },
    });

    const totalPages = Math.ceil(auctions.count / size);
    const content = auctions.rows;

    const hasNextPage = page < totalPages - 1;
    const hasPrevPage = page > 0;

    return {
      totalPages,
      content,
      next: hasNextPage,
      prev: hasPrevPage,
    };
  } catch (error) {
    console.log("Could not fetch AUCTIONS from DB: ", error);
  }
}

async function fetchAuction(req) {
      const auctionId = req.params.id
      try {
        return await Auction.findByPk(auctionId,{
          include: {
            model: User,
            model: CarDetail,
            model: Comment
          }
        })
      } catch (error) {
        console.log("Could not fetch Auction from DB")
      }
      
}

async function editAuction(req) {
  const auctionId = req.params.id
  const newInfo = req.body
  try {
    return await Auction.update(
      newInfo,
      { where: { id: auctionId } }
    );
  } catch (error) {
    console.log("Could not update Auction from DB")
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


module.exports = { fetchAuctions, createAuction, fetchAuction, editAuction};


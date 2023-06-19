const {
  Auction,
  Comment,
  CarDetail,
  User,
  Bid,
  Reply,
} = require("../../database/models");

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
      include: [{ model: User }, { model: CarDetail }],
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
  const auctionId = req.params.id;
  try {
    return await Auction.findByPk(auctionId, {
      include: [
        { model: User },
        { model: CarDetail },
        { model: Bid, include: { model: User } },
        { model: Comment, include: [{ model: User }, {model: Reply}] },
      ],
    });
  } catch (error) {
    console.log("Could not fetch Auction from DB");
  }
}

async function editAuction(req) {
  const auctionId = req.params.id;
  const newInfo = req.body;
  try {
    return await Auction.update(newInfo, { where: { id: auctionId } });
  } catch (error) {
    console.log("Could not update Auction from DB");
  }
}

async function createAuction({
  carDetailId,
  userId,
  minPrice,
  sellerType,
  customEnd,
}) {
  try {
    let userDB = await User.findByPk(userId);

    let carDetailDB = await CarDetail.findByPk(carDetailId);

    let checkExistingAuctionDB = await Auction.findOne({
      where: { UserId: userId },
    });

    const check =
      (userDB && carDetailDB) !== null && checkExistingAuctionDB === null;

    if (check) {
      const newAuction = await Auction.create({ minPrice, sellerType });

      newAuction.setUser(userDB.dataValues.id);
      newAuction.setCarDetail(carDetailDB.dataValues.id);

      const startAuction = new Date(newAuction.createdAt); //start of auction
      const endAuction = startAuction.setDate(startAuction.getDate() + 7); //get end of auction
      customEnd
        ? (newAuction.endTime = customEnd)
        : (newAuction.endTime = endAuction); //add end of auction (custom, or 7 days later)
      //saving changes
      await newAuction.save();
      return newAuction;
    }
  } catch (error) {
    console.log("Could not create the auction", error.message);
  }
}

module.exports = { fetchAuctions, createAuction, fetchAuction, editAuction };

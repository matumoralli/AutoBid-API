const { Auction, Comment, User } = require("../../database/models");

async function postComment(req) {
  const { userId } = req.params;
  const { auctionId, comment } = req.body;

  try {
    const auctionDB = await Auction.findByPk(auctionId);
    if (!auctionDB) {
      throw new Error("There is no Auction in DB with given ID");
    }
    const userDB = await User.findByPk(userId);
    if (!userDB) {
      throw new Error("There is no User in DB with given ID");
    }

    const newComment = await Comment.create({content: comment});
    newComment.setAuction(auctionDB.dataValues.id);
    return newComment.setUser(userDB.dataValues.id);
  } catch (error) {
    console.log("Could not create comment", error.message);
  }
}

module.exports = { postComment };

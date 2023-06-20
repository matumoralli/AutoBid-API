const { Auction, Comment, User, Reply } = require("../../database/models");

async function getComment(req) {
  const { commentId } = req.params;
  try {
    const commentDB = await Comment.findByPk(commentId, {
      include: [{ model: User }, { model: Reply }],
    });
    if (!commentDB) {
      throw new Error("There is no Comment in DB with given ID");
    }
    return commentDB;
  } catch (error) {
    console.log("Could not get comment", error.message);
  }
}

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

    const newComment = await Comment.create({ content: comment });
    newComment.setAuction(auctionDB.dataValues.id);
    return newComment.setUser(userDB.dataValues.id);
  } catch (error) {
    console.log("Could not create comment", error.message);
  }
}

module.exports = { postComment, getComment };

const { Reply, Comment, User } = require("../../database/models");

async function fetchReplies(commentId) {
  try {
    return await Reply.findAll({
      where: {
        commentId,
      },
    });
  } catch (error) {
    console.log(
      "Could not fetch REPLIES from DB whith Comment Id " + commentId + ":",
      error.message
    );
  }
}

async function fetchReply(req) {
  const { replyId } = req.params;
  try {
    const replyDB = await Reply.findByPk(replyId);
    if (!replyDB) {
      throw new Error(`There is no reply in DB with given ID: ${replyId}`);
    }
    return replyDB;
  } catch (error) {
    console.log(
      "Could not fetch reply from DB whith Reply Id " + replyId + ":",
      error.message
    );
  }
}

async function postReply(req) {
  const { commentId } = req.params;
  const { reply, userId } = req.body;
  try {
    const commentDB = await Comment.findByPk(commentId);
    if (!commentDB) {
      throw new Error(`There is no Comment in DB with given ID: ${commentId}`);
    }
    const userDB = await User.findByPk(userId);
    if (!userDB) {
      throw new Error(`There is no User in DB with given ID: ${userId}`);
    }

    const newReply = await Reply.create({ content: reply });
    newReply.setComment(commentDB.dataValues.id);
    return newReply.setUser(userDB.dataValues.id);
  } catch (error) {
    console.log("Could not create reply", error.message);
  }
}

module.exports = { fetchReplies, fetchReply, postReply };

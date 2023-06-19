const {Reply, Comment, User} = require("../../database/models");

async function fetchReplies(commentId) {
    try {
        return await Reply.findAll({
            where: {
                commentId
            }
        })
    } catch (error) {
        console.log("Could not fetch REPLIES from DB whith Comment Id "+commentId+":", error.message)
    }
    
}

async function postReply(req) {
  const {commentId} = req.params;
  const {reply, userId} = req.body
  try {
    const commentDB = await Comment.findByPk(commentId);
    if (!commentDB) {
      throw new Error("There is no Comment in DB with given ID");
    }
    const userDB = await User.findByPk(userId);
    if (!userDB) {
      throw new Error("There is no User in DB with given ID");
    }

    const newReply = await Reply.create({ content: reply });
    newReply.setComment(commentDB.dataValues.id);
    return newReply.setUser(userDB.dataValues.id);
  } catch (error) {
    console.log("Could not create reply", error.message);
  }
}

module.exports = {fetchReplies, postReply}
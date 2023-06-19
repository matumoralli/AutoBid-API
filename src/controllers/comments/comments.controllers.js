const commentsServices = require("../../services/comments")
const { response } = require("../../utils");
const { ClientError } = require("../../utils/errors");

async function postComment(req, res){
  const newComment = await commentsServices.post(req)
  if(newComment) return response(res, 201, newComment)
  else throw new ClientError ("Error creating comment", 400)
}

module.exports = { postComment }
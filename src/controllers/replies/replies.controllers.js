const repliesServices = require("../../services/replies");
const { response } = require("../../utils");
const { ClientError } = require("../../utils/errors");

async function getReplies(req, res) {
  const commentId = req.params.id;
  const replies = await repliesServices.list(commentId);
  if (replies) response(res, 200, replies);
  else
    throw new ClientError(
      `Error: No REPLIES were found for the comments with id: ${commentId}.`, 404);
}

async function postReply(req, res) {
  const reply = await repliesServices.create(req);
  if (reply) response(res, 200, reply);
  else
    throw new ClientError(
      `Error creating reply`, 404);
}

module.exports = { getReplies, postReply };

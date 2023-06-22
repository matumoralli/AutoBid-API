const { postComment, getComment } = require("./comments.service");

module.exports = {
  post: async (req) => await postComment(req),
  get: async (req) => await getComment(req),
};

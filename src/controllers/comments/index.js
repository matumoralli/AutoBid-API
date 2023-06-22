const { catchedAsync } = require("../../utils");
const { postComment, getComment } = require("./comments.controllers");

module.exports = {
  postComment: catchedAsync(postComment),
  getComment: catchedAsync(getComment),
};

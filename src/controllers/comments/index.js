const { catchedAsync } = require("../../utils");
const { postComment } = require('./comments.controllers')

module.exports = {
  postComment: catchedAsync(postComment)
}
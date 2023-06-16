const { postComment } = require('./comments.service')

module.exports={
  post: async(req) => await postComment(req)
}
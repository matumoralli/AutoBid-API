const { postBid } = require('./bid.service')

module.exports={
  post: async(req) => await postBid(req)
}
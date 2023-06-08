const { postBid } = require('./bid.service')

module.exports={
  post: async(body) => await postBid(body)
}
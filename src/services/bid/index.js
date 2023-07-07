const { postBid, getBid } = require('./bid.service')

module.exports={
  post: async(req) => await postBid(req),
  get: async(req) => await getBid(req)
}
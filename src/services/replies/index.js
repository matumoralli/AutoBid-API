const { fetchReplies, fetchReply, postReply} = require("./replies.service");


module.exports = {
    list: async (req) => await fetchReplies(req),
    get: async (req) => await fetchReply(req),
    create: async (req) => await postReply(req),
}
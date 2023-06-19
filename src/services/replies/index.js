const { fetchReplies, postReply} = require("./replies.service");


module.exports = {
    list: async (req) => await fetchReplies(req),
    create: async (req) => await postReply(req),
}
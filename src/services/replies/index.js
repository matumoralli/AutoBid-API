const { fetchReplies} = require("./replies.service");


module.exports = {
    list: async (req) => await fetchReplies(req)
}
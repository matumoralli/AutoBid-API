const {catchedAsync} = require("../../utils");
const {getReplies, getReply, postReply} = require("./replies.controllers");

module.exports = {
    getReplies: catchedAsync(getReplies),
    getReply: catchedAsync(getReply),
    postReply: catchedAsync(postReply)
}
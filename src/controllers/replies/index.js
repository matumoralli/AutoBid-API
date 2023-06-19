const {catchedAsync} = require("../../utils");
const {getReplies, postReply} = require("./replies.controllers");

module.exports = {
    getReplies: catchedAsync(getReplies),
    postReply: catchedAsync(postReply)
}
const {catchedAsync} = require("../../utils");
const {getReplies} = require("./replies.controllers");

module.exports = {
    getReplies: catchedAsync(getReplies)
}
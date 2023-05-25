const {Reply} = require("../../database/models");

async function fetchReplies(commentId) {
    try {
        return await Reply.findAll({
            where: {
                commentId
            }
        })
    } catch (error) {
        console.log("Could not fetch REPLIES from DB whith Comment Id "+commentId+":", error.message)
    }
    
}

module.exports = {fetchReplies}
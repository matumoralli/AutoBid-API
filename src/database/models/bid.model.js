const { UUID, UUIDV4, INTEGER } = require('sequelize')
const { conn } = require("../db.js");

module.exports = conn.define("bid", {
    id:{
        type: UUID,
        defaultValue: UUIDV4
    },
    ammount:{
        type: INTEGER,
        allowNull: false
    }
})
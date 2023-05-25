const { UUID, UUIDV4, INTEGER } = require('sequelize')
const { conn } = require("../db.js");

module.exports = conn.define("Bid", {
    id:{
        type: UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    ammount:{
        type: INTEGER,
        allowNull: false
    }
})
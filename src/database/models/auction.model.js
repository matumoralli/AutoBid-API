const { STRING, UUID, UUIDV4, INTEGER } = require('sequelize')
const { conn } = require("../db.js");

module.exports = conn.define('Auction', {
    id:{
        type: UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
    },
    minPrice:{
        type: INTEGER,
        defaultValue: 0
    },
    sellerType:{
        type: STRING,
        allowNull:false
    }
})
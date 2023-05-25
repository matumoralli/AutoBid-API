const { UUID, UUIDV4, INTEGER, ENUM } = require('sequelize')
const { conn } = require("../db.js");

module.exports = conn.define('auction', {
    id:{
        type: UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    minPrice:{
        type: INTEGER,
        defaultValue: 0
    },
    sellerType:{
        type: ENUM("Dealer", "Private party"),
        allowNull:false
    }
})
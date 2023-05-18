const { STRING, UUID, UUIDV4, INTEGER } = require('sequelize')
const { conn } = require("../db.js");

module.exports = conn.define('auction', {
    id:{
        type: UUID,
        defaultValue: UUIDV4
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
const { UUID, UUIDV4, INTEGER, ENUM } = require('sequelize')
const { conn } = require("../db.js");

module.exports = conn.define('Credit', {
    id:{
        type: UUID,
        defaultValue: UUIDV4,
        primaryKey: true,
    },
})
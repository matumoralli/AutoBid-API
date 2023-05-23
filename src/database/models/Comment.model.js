const { UUID, UUIDV4, TEXT } = require('sequelize')
const { conn }= require('../db.js')

module.exports = conn.define('Comment', {
    id:{
        type:UUID,
        defaultValue:UUIDV4,
        primaryKey: true
    },
    content:{
        type: TEXT,
        allowNull: false
    },

})
const { TEXT, UUIDV4, UUID } = require('sequelize')
const { conn } = require ('../db.js')

module.exports = conn.define('Reply', {
    id:{
        type:UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    content:{
        type:TEXT,
        allowNull: false
    },
})
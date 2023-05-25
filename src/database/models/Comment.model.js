const { DataTypes} = require('sequelize')
const { conn }= require('../db.js')

module.exports = conn.define('Comment', {
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey: true
    },
    content:{
        type: DataTypes.TEXT,
        allowNull: false
    },
})
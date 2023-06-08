const { DataTypes} = require('sequelize')
const { conn }= require('../db.js')

module.exports = conn.define('Payment', {
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey: true
    },
    buyerUserId: {
        type: DataTypes.UUID,
        allowNull: false,   
    },
    sellerUserId: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    state:{
        type: DataTypes.ENUM("success", "failure", "pending", "unknown"),
        allowNull:false,
        defaultValue: "unknown"
    }
})
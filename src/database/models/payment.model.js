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
        type: DataTypes.STRING,
        allowNull:false,
        defaultValue: "unknown"
    },
    transactionId: {
        type: DataTypes.STRING,
        allowNull: true
    },
    transactionAmount: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
})
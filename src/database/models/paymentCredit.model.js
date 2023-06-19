const { DataTypes} = require('sequelize')
const { conn }= require('../db.js')

module.exports = conn.define('PaymentCredit', {
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey: true
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
    transactionAmount:{
        type: DataTypes.INTEGER,
        allowNull: true
    }
})
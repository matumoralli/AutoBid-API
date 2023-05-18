const { STRING, UUID, UUIDV4, INTEGER, BOOLEAN, TEXT } = require('sequelize')
const { conn } = require("../db.js");

module.exports = conn.define('carDetail', {
    id:{
        type:UUID,
        defaultValue: UUIDV4,
        primaryKey: true
    },
    brand:{
        type: STRING,
        allowNull: false,
    },
    model: {
        type: STRING,
        allowNull:false
    },
    year:{
        type: INTEGER,
        allowNull:false
    },
    kilometers:{
        type: INTEGER,
        allowNull:false
    },
    domain:{
        type: STRING,
        allowNull:false
    },
    owner:{
        type: STRING,
        allowNull:false
    },
    // seller:{  SE SACA DESDE auctionOwner
    //     type: STRING,
    //     allowNull:false
    // },
    engine:{
        type: STRING,
        allowNull:false
    },
    transmission:{
        type: STRING,
        allowNull:false
    },
    driveTrain:{
        type: STRING,
        allowNull:false
    },
    bodyType:{
        type: STRING,
        allowNull:false
    },
    color:{
        type: STRING,
        allowNull:false
    },
    highlights:{
        type: TEXT,
        allowNull:false
    },
    equipement:{
        type: TEXT,
        allowNull:false
    },
    modifications:{
        type: TEXT,
        allowNull:false
    },
    knownkFlaws:{
        type: TEXT,
        allowNull:false
    },
    services:{
        type: TEXT,
        allowNull:false
    },
    addedItems:{
        type: TEXT,
        allowNull:false
    },
    checked:{
        type: BOOLEAN,
        defaultValue:false
    }
})
const { STRING, UUID, UUIDV4, INTEGER, ARRAY, BLOB} = require("sequelize");
const { conn } = require("../db.js");

module.exports = conn.define("CarDetail", {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  brand: {
    type: STRING,
    allowNull: false,
  },
  model: {
    type: STRING,
    allowNull: false,
  },
  year: {
    type: INTEGER,
    allowNull: false,
  },
  kilometers: {
    type: INTEGER,
    allowNull: false,
  },
  domain: {
    type: BLOB,
    allowNull: false,
  },
  owner: {
    type: STRING,
    allowNull: false,
  },
  // seller:{  SE SACA DESDE auctionOwner
  //     type: STRING,
  //     allowNull:false
  // },
  engine: {
    type: STRING,
    allowNull: false,
  },
  transmission: {
    type: STRING,
    allowNull: false,
  },
  driveTrain: {
    type: STRING,
    allowNull: false,
  },
  bodyType: {
    type: STRING,
    allowNull: false,
  },
  color: {
    type: STRING,
    allowNull: false,
  },
  highlights: {
    type: ARRAY(STRING),
    allowNull: false,
  },
  equipement: {
    type: ARRAY(STRING),
    allowNull: false,
  },
  modifications: {
    type: ARRAY(STRING),
    allowNull: true,
  },
  knownFlaws: {
    type: ARRAY(STRING),
    allowNull: false,
  },
  services: {
    type: ARRAY(STRING),
    allowNull: false,
  },
  addedItems: {
    type: ARRAY(STRING),
    allowNull: true,
  },
  inspection: {
    type: BLOB,
    defaultValue: false,
  },
  images: {
    type: ARRAY(STRING),
    allowNull: true,
    defaultValue: [],
  },
});

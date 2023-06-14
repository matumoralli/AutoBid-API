const { STRING, UUID, UUIDV4, INTEGER, ARRAY, BLOB } = require("sequelize");
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
    type: STRING,
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
    defaultValue: [],
  },
  equipement: {
    type: ARRAY(STRING),
    allowNull: false,
    defaultValue: [],
  },
  modifications: {
    type: ARRAY(STRING),
    allowNull: true,
    defaultValue: [],
  },
  knownFlaws: {
    type: ARRAY(STRING),
    allowNull: false,
    defaultValue: [],
  },
  services: {
    type: ARRAY(STRING),
    allowNull: false,
    defaultValue: [],
  },
  addedItems: {
    type: ARRAY(STRING),
    allowNull: true,
    defaultValue: [],
  },
  inspection: {
    type: STRING,
    defaultValue: false,
  },
  images: {
    type: ARRAY(STRING),
    allowNull: true,
    defaultValue: [],
  },
});

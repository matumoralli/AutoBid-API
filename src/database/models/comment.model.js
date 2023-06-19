const { UUID, UUIDV4, STRING } = require("sequelize");
const { conn } = require("../db.js");

module.exports = conn.define("Comment", {
  id: {
    type: UUID,
    defaultValue: UUIDV4,
    primaryKey: true,
  },
  content: {
    type: STRING,
    allowNull: false,
    validate: {
      len: [2, 250],
      notContains: [
        "gmail",
        "yahoo",
        "hotmal",
        "outlook",
        "aol",
        "mail.com",
        "protonmail",
        "icloud.com",
      ],
    },
  },
});

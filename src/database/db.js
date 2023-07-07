require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_DATABASE, DB_HOST } = process.env;

const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: 5432,
  dialect: "postgres",
  logging: false,
});

module.exports = {
  conn: sequelize,
};

require("dotenv").config({ path: "../.env" });
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "moneytransfer",
  process.env.DB_USER,
  process.env.DB_PASS,
  { dialect: "mysql", host: "localhost", logging: false }
);

module.exports = sequelize;
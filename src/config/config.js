const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("Users", "root", "18042006", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;

const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../config");

module.exports = {
  User: sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      gender: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING(50),
        allowNull: false,
        defaultValue: "admin",
      },
    },
    {
      tableName: "users",
      freezeTableName: true,
      timestamps: false,
    }
  ),
};

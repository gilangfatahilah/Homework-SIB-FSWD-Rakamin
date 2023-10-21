const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../config");

module.exports = {
  Movie: sequelize.define(
    "Movie",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      genres: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      photo: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
    },
    {
      tableName: "movies",
      freezeTableName: true,
      timestamps: false,
    }
  ),
};

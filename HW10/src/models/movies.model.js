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
        allowNull: false,
      },
      genres: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      year: {
        type: DataTypes.INTEGER,
        allowNull: false,
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

const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");

const Team = sequelize.define(
  "Team",
  {
    teamName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
      },
    },
    officialName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    teamId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
      validate: {
        isInt: true,
      },
    },
    primary: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    secondary: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alternate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Teams",
    timestamps: true,
  }
);

module.exports = Team;

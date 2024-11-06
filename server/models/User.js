const { DataTypes } = require("sequelize");
const sequelize = require("../sequelize");
const Team = require("./Team");

const User = sequelize.define(
  "User",
  {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
        notEmpty: true,
      },
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    country: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    teamId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "Teams",
        key: "id",
      },
    },
  },
  {
    tableName: "Users",
    timestamps: true,
  }
);

module.exports = User;

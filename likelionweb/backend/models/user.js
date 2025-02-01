const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define("User", {
  kakaoId: { type: DataTypes.STRING, unique: true },
  nickname: { type: DataTypes.STRING },
  email: { type: DataTypes.STRING, unique: true, allowNull: true },
  profileImage: { type: DataTypes.TEXT },
});

module.exports = User;

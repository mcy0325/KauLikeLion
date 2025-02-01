const { Sequelize } = require("sequelize");

// 원격 MySQL 연결 설정
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: process.env.DB_PORT || 17392,
    logging: false, // SQL 로그 출력 비활성화
  }
);

module.exports = sequelize;

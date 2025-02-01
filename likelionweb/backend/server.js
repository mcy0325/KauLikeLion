require("dotenv").config({ path: "./backend/.env" });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require("./config/database"); // MySQL 연결
const User = require("./models/user"); // 모델 불러오기

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ✅ MySQL 연결 및 테이블 동기화
sequelize
  .sync()
  .then(() => {
    console.log("✅ MySQL 연결 성공 및 테이블 동기화 완료");
  })
  .catch((err) => {
    console.error("❌ MySQL 연결 실패:", err);
  });

// ✅ 라우트 설정
const authRoutes = require("./routes/auth");
app.use("/api", authRoutes);

app.listen(5000, () => console.log("✅ 백엔드 서버 실행 중 (포트 5000)"));

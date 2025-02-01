const express = require("express");
const axios = require("axios");
const jwt = require("jsonwebtoken");
const User = require("../models/user"); // ✅ Sequelize 모델 불러오기

const router = express.Router();

router.post("/auth/kakao", async (req, res) => {
  const { code } = req.body;

  try {
    // 1. 카카오 서버에서 access_token 요청
    const kakaoTokenResponse = await axios.post(
      "https://kauth.kakao.com/oauth/token",
      null,
      {
        params: {
          grant_type: "authorization_code",
          client_id: process.env.KAKAO_CLIENT_ID,
          redirect_uri: process.env.KAKAO_REDIRECT_URI,
          code,
        },
      }
    );

    const accessToken = kakaoTokenResponse.data.access_token;

    // 2. 카카오 사용자 정보 요청
    const userInfoResponse = await axios.get(
      "https://kapi.kakao.com/v2/user/me",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const { id, properties, kakao_account } = userInfoResponse.data;
    const nickname = properties.nickname;
    const email = kakao_account.email || null;
    const profileImage = properties.profile_image;

    // 3. DB에서 유저 정보 확인 (MySQL)
    let user = await User.findOne({ where: { kakaoId: id } });

    if (!user) {
      // 유저가 없으면 새로 저장
      user = await User.create({
        kakaoId: id,
        nickname,
        email,
        profileImage,
      });
    }

    // 4. JWT 발급 (사용자의 고유 ID와 닉네임 포함)
    const token = jwt.sign(
      { id: user.id, nickname: user.nickname },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    // 5. 프론트엔드로 JWT 전송
    res.json({ success: true, token });
  } catch (error) {
    res.status(400).json({ success: false, message: "카카오 로그인 실패" });
  }
});

module.exports = router;

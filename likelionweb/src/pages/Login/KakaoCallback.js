import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function KakaoCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get("code");

    if (code) {
      axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/kakao`, { code })
        .then((res) => {
          localStorage.setItem("token", res.data.token); //JWT 저장 (로그인 상태 유지)
          navigate("/"); //로그인 성공 후 홈 화면으로 이동
        })
        .catch(() => {
          alert("카카오 로그인 실패");
        });
    }
  }, [navigate]);

  return <div>로그인 중...</div>;
}

export default KakaoCallback;

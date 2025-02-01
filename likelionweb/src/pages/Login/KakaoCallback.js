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
          localStorage.setItem("token", res.data.token);
          navigate("/");
        })
        .catch(() => {
          alert("카카오 로그인 실패");
        });
    }
  }, [navigate]);

  return <div>로그인 중...</div>;
}

export default KakaoCallback;

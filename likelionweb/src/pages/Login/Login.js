import React from "react";

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAO_REDIRECT_URI}&response_type=code`;

function Login() {
  return (
    <div style={styles.container}>
      <button
        onClick={() => (window.location.href = KAKAO_AUTH_URL)}
        style={styles.kakaoButton}
      >
        카카오 로그인
      </button>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  kakaoButton: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#FEE500",
    color: "#3C1E1E",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    marginTop: "10px",
  },
};

export default Login;

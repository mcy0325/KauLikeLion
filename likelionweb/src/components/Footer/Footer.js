import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/likelion_logo.png" alt="LIKELION Logo" />
          <div className="footer-text">
            <div className="title">한국항공대학교 멋쟁이사자처럼</div>
            <div className="subtitle">웹 개발 & IT 창업 동아리</div>
            <div className="address">경기도 고양시 덕양구 항공대학로 76</div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div>&copy; 2024 멋쟁이사자처럼. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;

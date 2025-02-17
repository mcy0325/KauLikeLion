import React from "react";
import "./RecruitmentSection.css";

function RecruitmentSection() {
  return (
    <section className="recruitment-section">
      <div className="recruitment-header">
        <div className="title">LIKELION Korea Aerospace University</div>
        <div className="subtitle">13기 아기 사자 모집 START!</div>
        <div className="period">
          서류 접수 기간: 02월 17일 (월) 13:00 ~ 03월 04일 (화) 13:00
        </div>
      </div>
      <div className="recruitment-content">
        <div className="description">
          <div>멋사는 "내 아이디어를 내 손으로 실현한다"라는 슬로건 아래,</div>
          <div>웹 개발을 배우고 프로젝트를 수행합니다.</div>
          <div>
            1년 간 함께 성장해 나갈 열정 가득한 아기사자들을 기다리고 있습니다!
          </div>
          <div>전공, 학년, 나이에 제한 없이 한국항공대학교 학생이라면</div>
          <div>재학생, 휴학생, 코딩 실력 무관 누구나 가입할 수 있습니다.</div>
          <div>많은 관심과 지원 부탁드립니다 :)</div>
        </div>
        <a
          href="https://forms.gle/7amaU9CRNZYBcpio9"
          className="recruitment-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          지원 폼 작성하기
        </a>
      </div>
    </section>
  );
}

export default RecruitmentSection;

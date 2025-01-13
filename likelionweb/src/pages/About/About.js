import React from "react";
import ManagementCard from "../../components/ManagementCard/ManagementCard";
import "./About.css";

function About() {
  const management12 = [
    {
      name: "쩡이",
      role: "회장",
      department: "소프트웨어학과",
      img: "/jjeongii_12.jpg",
      link: "https://github.com/jjeongee",
    },
    {
      name: "루피",
      role: "부회장",
      department: "소프트웨어학과",
      img: "/loopy_12.png",
      link: "https://github.com/wonjeongjeong",
    },
    {
      name: "베텔",
      role: "운영진",
      department: "항공전자정보공학부",
      img: "/vetel_12.png",
      link: "https://github.com/Vettel22",
    },
    {
      name: "아리",
      role: "운영진",
      department: "소프트웨어학과",
      img: "/ari_12.png",
      link: "https://github.com/mcy0325",
    },
  ];

  const management13 = [
    {
      name: "아리",
      role: "회장",
      department: "소프트웨어학과",
      img: "/ari_13.png",
      link: "https://github.com/mcy0325",
    },
    {
      name: "베릴",
      role: "부회장",
      department: "소프트웨어학과",
      img: "/beryl_13.png",
      link: "https://github.com/MinJunKKang",
    },
    {
      name: "제리",
      role: "운영진",
      department: "소프트웨어학과",
      img: "/jerry_13.png",
      link: "https://github.com/yyoonngg",
    },
    {
      name: "이사장",
      role: "운영진",
      department: "소프트웨어학과",
      img: "/leesajang_13.png",
      link: "https://github.com/girin-sj",
    },
    {
      name: "쥬쥬",
      role: "운영진",
      department: "소프트웨어학과",
      img: "/jyujyu_13.png",
      link: "https://github.com/JuJu-0225",
    },
    {
      name: "얀",
      role: "운영진",
      department: "소프트웨어학과",
      img: "/yaan_13.png",
      link: "https://github.com/yaaan7",
    },
  ];

  return (
    <div className="about">
      <div className="main-banner">
        <div className="banner-title">Growl To World!</div>
        <div className="banner-subtitle">한국항공대학교 멋쟁이사자처럼</div>
        <div className="about-description">
          멋쟁이사자처럼은 현재 전국 42개 대학이 함께하고 있는 연합
          동아리입니다. <br />
          한국항공대학교 멋사는 “내 아아디어를 내 손으로 실현한다”라는 슬로건
          아래, 웹 개발을 배우고 프로젝트를 수행합니다. <br />
          한국항공대학교 멋사의 선발기준에 코딩 실력은 ‘절대’ 없습니다!
          <br />
          전공, 학년, 나이에 제한 없이 한국항공대학교 학생이라면 재학생, 휴학생
          무관 누구나 가입할 수 있습니다!
        </div>
      </div>

      <div className="management-section">
        <div className="management-header">
          <div className="management-intro">
            2024년 한국항공대학교 멋쟁이사자처럼
          </div>
          <div className="management-title">LIKELION 12TH Management</div>
        </div>
        <div className="management-cards">
          {management12.map((person, index) => (
            <ManagementCard key={index} person={person} />
          ))}
        </div>

        <div className="management-header">
          <div className="management-intro">
            2025년 한국항공대학교 멋쟁이사자처럼
          </div>
          <div className="management-title">LIKELION 13TH Management</div>
        </div>
        <div className="management-cards">
          {management13.map((person, index) => (
            <ManagementCard key={index} person={person} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;

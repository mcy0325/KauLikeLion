import React from "react";
import ManagementCard from "../../components/ManagementCard/ManagementCard";
import "./About.css";

function About() {
  const management12 = [
    {
      name: "이희정",
      role: "회장",
      department: "소프트웨어학과",
      img: "path_to_image1",
    },
    {
      name: "정원정",
      role: "부회장",
      department: "소프트웨어학과",
      img: "path_to_image2",
    },
    {
      name: "신윤종",
      role: "운영진",
      department: "항공전자정보공학부",
      img: "path_to_image3",
    },
    {
      name: "문채영",
      role: "운영진",
      department: "소프트웨어학과",
      img: "path_to_image4",
    },
  ];

  const management13 = [
    {
      name: "문재영",
      role: "운영진",
      department: "소프트웨어학과",
      img: "path_to_image4",
    },
    {
      name: "문재영",
      role: "운영진",
      department: "소프트웨어학과",
      img: "path_to_image4",
    },
    {
      name: "문재영",
      role: "운영진",
      department: "소프트웨어학과",
      img: "path_to_image4",
    },
    {
      name: "문재영",
      role: "운영진",
      department: "소프트웨어학과",
      img: "path_to_image4",
    },
    {
      name: "문재영",
      role: "운영진",
      department: "소프트웨어학과",
      img: "path_to_image4",
    },
    {
      name: "문재영",
      role: "운영진",
      department: "소프트웨어학과",
      img: "path_to_image4",
    },
  ];

  return (
    <div className="about">
      <div className="about-header">
        <h1>Growl To World!</h1>
        <p>- 한국항공대학교 멋쟁이사자처럼 13기 -</p>
        <p>
          멋쟁이사자처럼은 현재 전국 42개 대학이 함께하고 있는 연합
          동아리입니다. <br />
          한국항공대학교 멋사는 "내 아이디어를 내 손으로 실현한다"라는 슬로건
          아래, 웹 개발을 배우고 프로젝트를 수행합니다.
        </p>
      </div>

      <div className="management-section">
        <h2>2024년 한국항공대학교 멋쟁이사자처럼</h2>
        <h3>LIKELION 12TH Management</h3>
        <div className="management-grid">
          {management12.map((person, index) => (
            <ManagementCard key={index} person={person} />
          ))}
        </div>

        <h2>2025년 한국항공대학교 멋쟁이사자처럼</h2>
        <h3>LIKELION 13TH Management</h3>
        <div className="management-grid">
          {management13.map((person, index) => (
            <ManagementCard key={index} person={person} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;

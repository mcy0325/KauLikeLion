import React from "react";
import ManagementCard from "../ManagementCard/ManagementCard";
import "./ManagementSection.css";

function ManagementSection() {
  const management = [
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
      link: "https://github.com/beryl",
    },
    {
      name: "제리",
      role: "운영진",
      department: "소프트웨어학과",
      img: "/images/img3.jpg",
      link: "https://github.com/jerry",
    },
    {
      name: "이사장",
      role: "운영진",
      department: "소프트웨어학과",
      img: "/leesajang_13.png",
      link: "https://github.com/leesajang",
    },
    {
      name: "쥬쥬",
      role: "운영진",
      department: "소프트웨어학과",
      img: "/jyujyu_13.png",
      link: "https://github.com/jyujyu",
    },
    {
      name: "얀",
      role: "운영진",
      department: "소프트웨어학과",
      img: "/yaan_13.png",
      link: "https://github.com/yaan",
    },
  ];

  return (
    <div className="management-section">
      <div className="management-header">
        <div className="management-intro">
          앞으로 1년 동안 아기사자들과 함께 할 운영진들
        </div>
        <div className="management-title">LIKELION 13TH Management</div>
      </div>
      <div className="management-cards">
        {management.map((person, index) => (
          <ManagementCard key={index} person={person} />
        ))}
      </div>
    </div>
  );
}

export default ManagementSection;

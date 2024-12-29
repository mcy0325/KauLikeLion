import React from "react";
import "./ManagementSection.css";

function ManagementSection() {
  const management = [
    {
      name: "아리",
      role: "회장",
      department: "소프트웨어학과",
      img: "/ari.png",
    },
    {
      name: "베릴",
      role: "부회장",
      department: "소프트웨어학과",
      img: "/beryl.png",
    },
    {
      name: "제리",
      role: "운영진",
      department: "소프트웨어학과",
      img: "/images/img3.jpg",
    },
    {
      name: "이사장",
      role: "운영진",
      department: "소프트웨어학과",
      img: "/leesajang.png",
    },
    {
      name: "쥬쥬",
      role: "운영진",
      department: "소프트웨어학과",
      img: "/jyujyu.png",
    },
    {
      name: "얀",
      role: "운영진",
      department: "소프트웨어학과",
      img: "/yaan.png",
    },
  ];

  return (
    <div className="management-section">
      <div className="management-header">
        <div className="management-intro">
          앞으로 1년 동안 아기사자들과 함께 할 운영진들
        </div>
        <div className="management-title">LIKELION 12TH Management</div>
      </div>
      <div className="management-cards">
        {management.map((person) => (
          <div key={person.name} className="card">
            <img src={person.img} alt={person.name} />
            <div className="card-details">
              <div className="card-info">
                <div className="name">{person.name}</div>
                <div className="department">{person.department}</div>
              </div>
              <div className="role">{person.role}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManagementSection;

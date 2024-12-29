import React from "react";
import "./ProjectsSection.css";

function ProjectsSection() {
  const projects = [
    {
      title: "우리 따라왕",
      batch: "12TH",
      img: "/likelion_logo.png",
      link: "https://github.com/LikelionKau12th/WooWang_FE.git",
    },
    {
      title: "멋사이클링",
      batch: "12TH",
      img: "/likelion_logo.png",
      link: "https://github.com/LikelionKau12th/mutcycle.git",
    },
    {
      title: "우리랑 아기랑",
      batch: "12TH",
      img: "/likelion_logo.png",
      link: "https://github.com/LikelionKau12th/BabyWithUs-Front.git",
    },
    {
      title: "???",
      batch: "13TH",
      img: "/likelion_logo.png",
      link: "https://github.com/project1",
    },
  ];

  return (
    <section className="projects-section">
      <div className="section-header">
        <div className="intro">
          한국항공대학교 멋쟁이사자처럼에서 개발한 다양한 서비스
        </div>
        <div className="header-title">
          Web Service Projects <a href="/projects">View all services →</a>
        </div>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            style={{ backgroundImage: `url(${project.img})` }}
          >
            <div className="title">{project.title}</div>
            <div className="batch">
              <div className="from">FROM</div>
              <div className="batch-number">{project.batch}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;

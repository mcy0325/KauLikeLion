import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./Projects.css";

function Projects() {
  const projects12 = [
    {
      title: "우리 따라왕",
      batch: "12TH",
      img: "/github_logo.svg",
      link: "https://github.com/LikelionKau12th/WooWang_FE.git",
    },
    {
      title: "멋사이클링",
      batch: "12TH",
      img: "/github_logo.svg",
      link: "https://github.com/LikelionKau12th/mutcycle.git",
    },
    {
      title: "우리랑 아기랑",
      batch: "12TH",
      img: "/github_logo.svg",
      link: "https://github.com/LikelionKau12th/BabyWithUs-Front.git",
    },
  ];

  const projects13 = [];

  return (
    <div className="projects">
      <div className="main-banner">
        <div className="banner-title">Growl To World!</div>
        <div className="banner-subtitle">한국항공대학교 멋쟁이사자처럼</div>
        <div className="projects-description">
          한국항공대학교 멋쟁이사자처럼에서 개발한 다양한 웹 서비스를
          소개합니다.
        </div>
      </div>

      <div className="projects-section">
        <div className="projects-header">
          <div className="projects-intro">
            2024년 한국항공대학교 멋쟁이사자처럼
          </div>
          <div className="projects-header-title">
            LIKELION 12TH Web Service Projects
          </div>
        </div>
        <div className="projects-grid">
          {projects12.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <div className="projects-header">
          <div className="projects-intro">
            2025년 한국항공대학교 멋쟁이사자처럼
          </div>
          <div className="projects-header-title">
            LIKELION 13TH Web Service Projects
          </div>
        </div>
        <div className="projects-grid">
          {projects13.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;

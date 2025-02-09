import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import "./ProjectsSection.css";

function ProjectsSection() {
  const projects = [
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

  return (
    <section className="projects-section">
      <div className="projects-header">
        <div className="projects-intro">
          한국항공대학교 멋쟁이사자처럼에서 개발한 웹 서비스
        </div>
        <div className="projects-header-title">
          Web Service Projects <a href="/projects">View all services →</a>
        </div>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;

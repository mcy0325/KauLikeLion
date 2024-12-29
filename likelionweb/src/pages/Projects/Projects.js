import React from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./Projects.css";

function Projects() {
  const projects12 = [
    { title: "우리 따라와", batch: "12TH", img: "path_to_image1" },
    { title: "멋시테이블", batch: "12TH", img: "path_to_image2" },
    { title: "우리랑 아기랑", batch: "12TH", img: "path_to_image3" },
  ];

  const projects13 = [
    { title: "우리 따라와", batch: "13TH", img: "path_to_image1" },
    { title: "멋시테이블", batch: "13TH", img: "path_to_image2" },
    { title: "우리랑 아기랑", batch: "13TH", img: "path_to_image3" },
    { title: "알 수 없음", batch: "13TH", img: "path_to_image4" },
  ];

  return (
    <div className="projects">
      <div className="projects-header">
        <h1>Growl To World!</h1>
        <p>- 한국항공대학교 멋쟁이사자처럼 12기 -</p>
        <p>멋쟁이사자처럼 12기에서 개발한 다양한 웹 서비스를 소개합니다.</p>
      </div>

      <div className="projects-section">
        <h2>Web Service Projects</h2>
        <h3>FROM 12TH</h3>
        <div className="projects-grid">
          {projects12.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        <h3>FROM 13TH</h3>
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

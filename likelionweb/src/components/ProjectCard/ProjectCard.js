import React from "react";
import "./ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <a
      key={project.index}
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
  );
}

export default ProjectCard;

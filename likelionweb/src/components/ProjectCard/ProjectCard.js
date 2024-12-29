import React from "react";
import "./ProjectCard.css";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <img src={project.img} alt={project.title} />
      <h3>{project.title}</h3>
      <span className="batch">FROM {project.batch}</span>
    </div>
  );
}

export default ProjectCard;

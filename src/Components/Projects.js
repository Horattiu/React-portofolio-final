import React from "react";
import "./projects.css";

function Projects() {
  return (
    <div className="bg-projects">
      <p className="projects-title">Projects</p>
      <div className="projects-container grid">
        <div className="project-box"></div>
        <div className="project-box"></div>
        <div className="project-box"></div>
        <div className="project-box"></div>
        <div className="project-box"></div>
      </div>
    </div>
  );
}

export default Projects;

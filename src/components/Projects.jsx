import React from "react";
import "./Projects.scss";
import ProjectsCard from "./ProjectsCard";
import "animate.css";
import { projects } from "../config/config";

const Projects = () => {
  return (
    <div className="projectsContainer">
      <div className="projectsCardList animate__animated animate__slideInRight">
        {projects?.map((project, idx) => {
          return (
            <ProjectsCard
              key={idx}
              projName={project?.projName}
              projDesc={project?.projDesc}
              projUrl={project?.projUrl}
              projImg={project?.projImg}
              projUrlTxt={project?.projUrlTxt}
              projTech={project?.projTech}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

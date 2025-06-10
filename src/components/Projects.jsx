import React from "react";
import "./Projects.scss";
import ProjectsCard from "./ProjectsCard";
import "animate.css";
import { projects } from "../config/config";
import { Helmet } from "react-helmet-async";

const Projects = () => {
  return (
    <div className="projectsContainer">
      <Helmet>
        <title>Projects | Nishant Mourya</title>
      </Helmet>
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

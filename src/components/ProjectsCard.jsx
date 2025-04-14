import React from "react";
import "./Projects.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const ProjectsCard = ({
  projName,
  projDesc,
  projUrl,
  projImg,
  projUrlTxt,
  projTech,
}) => {
  return (
    <div className="projectCard">
      <div className="projectCard_inner">
        <div className="projectCard_front">
          <img src={projImg} alt="Avatar" className="cardImage" />
          <div>{projName}</div>
        </div>

        <div className="projectCard_back">
          <h3>{projName}</h3>
          <div>{projDesc}</div>
          <div className="projDesc">Tech: {projTech}</div>
          <a href={projUrl} target="_blank">
            <div className="projUrl">
              {projUrlTxt+" "}
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;

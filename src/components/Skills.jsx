import { useEffect, useState } from "react";
import "./Skills.scss";
import * as motion from "motion/react-client";
import { Tooltip } from "@mui/material";

import "animate.css";
import { Helmet } from "react-helmet-async";
const Skills = () => {
  const [disp, setDisp] = useState(false);

  useEffect(() => {
    let timeout = setTimeout(() => setDisp(true), 500);
    return () => clearTimeout(timeout); // cleanup on unmount or change
  }, []);

  return (
    <div className="skillsContainer">
      <Helmet>
        <title>Skills | Nishant Mourya</title>
      </Helmet>
      <div className="skillsList">
        <div className="skillsFlexContainer animate__animated animate__slideInRight">
          <div className="skillHeading">Professional Skillset</div>
          <div className=" skillsFlex ">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.6 }}>
              <Tooltip title="C Programming" arrow followCursor>
                <i className="devicon-c-plain icon" />
              </Tooltip>
            </motion.div>

            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.6 }}>
              <Tooltip title="C++ Programming" arrow followCursor>
                <i className=" icon devicon-cplusplus-plain" />
              </Tooltip>
            </motion.div>

            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.6 }}>
              <Tooltip title="Java" arrow followCursor>
                <i className=" icon devicon-java-plain-wordmark" />
              </Tooltip>
            </motion.div>

            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.6 }}>
              <Tooltip title="HTML" arrow followCursor>
                <i className=" icon devicon-html5-plain-wordmark" />
              </Tooltip>
            </motion.div>

            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.6 }}>
              <Tooltip title="CSS" arrow followCursor>
                <i className=" icon devicon-css3-plain-wordmark" />
              </Tooltip>
            </motion.div>

            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.6 }}>
              <Tooltip title="JavaScript" arrow followCursor>
                <i className=" icon devicon-javascript-plain" />
              </Tooltip>
            </motion.div>

            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.6 }}>
              <Tooltip title="ReactJS" arrow followCursor>
                <i className=" icon devicon-react-original" />
              </Tooltip>
            </motion.div>

            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.6 }}>
              <Tooltip title="TailwindCSS" arrow followCursor>
                <i className="icon devicon-tailwindcss-original"></i>
              </Tooltip>
            </motion.div>

            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.6 }}>
              <Tooltip title="Redux" arrow followCursor>
                <i className=" icon devicon-redux-original" />
              </Tooltip>
            </motion.div>

            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.6 }}>
              <Tooltip title="Git" arrow followCursor>
                <i className=" icon devicon-git-plain" />
              </Tooltip>
            </motion.div>
          </div>
        </div>
        {disp && (
          <div className="skillsFlexContainer animate__animated animate__slideInRight ">
            <div className="skillHeading">Tools I use</div>
            <div className=" skillsFlex ">
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.6 }}>
                <Tooltip title="VS Code" arrow followCursor>
                  <i className="icon devicon-vscode-plain" />
                </Tooltip>
              </motion.div>

              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.6 }}>
                <Tooltip title="Postman" arrow followCursor>
                  <i className="icon devicon-postman-plain" />
                </Tooltip>
              </motion.div>

              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.6 }}>
                <Tooltip title="IntelliJ" arrow followCursor>
                  <i className="icon devicon-intellij-plain" />
                </Tooltip>
              </motion.div>

              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.6 }}>
                <Tooltip title="Vercel" arrow followCursor>
                  <i className="icon devicon-vercel-original-wordmark" />
                </Tooltip>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;

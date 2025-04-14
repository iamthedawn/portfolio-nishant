import React, { useEffect, useState } from "react";
import "./Skills.scss";
import * as motion from "motion/react-client";

import "animate.css";
const Skills = () => {
  const [disp, setDisp] = useState(false);

  useEffect(() => {
    let timeout = setTimeout(() => setDisp(true), 500);
    return () => clearTimeout(timeout); // cleanup on unmount or change
  }, []);

  return (
    <div className="skillsContainer">
      <div className="skillsList">
        <div className="skillsFlexContainer animate__animated animate__slideInRight">
          <div className="skillHeading">Professional Skillset</div>
          <div className=" skillsFlex ">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.6 }}>
              <i className="devicon-c-plain icon" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.6 }}>
              <i class=" icon devicon-cplusplus-plain" />
            </motion.div>

            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.6 }}>
              <i class=" icon devicon-java-plain-wordmark" />
            </motion.div>

            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.6 }}>
              <i class=" icon devicon-html5-plain-wordmark" />
            </motion.div>

            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.6 }}>
              <i class=" icon devicon-css3-plain-wordmark" />
            </motion.div>

            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.6 }}>
              <i class=" icon devicon-javascript-plain" />
            </motion.div>

            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.6 }}>
              <i class=" icon devicon-react-original" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.6 }}>
              <i class=" icon devicon-redux-original" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.6 }}>
              <i class=" icon devicon-git-plain" />
            </motion.div>
          </div>
        </div>
        {disp && (
          <div className="skillsFlexContainer animate__animated animate__slideInRight ">
            <div className="skillHeading">Tools I use</div>
            <div className=" skillsFlex ">
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.6 }}>
                <i class="icon devicon-vscode-plain" />
              </motion.div>

              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.6 }}>
                <i class="icon devicon-postman-plain" />
              </motion.div>

              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.6 }}>
                <i class="icon devicon-intellij-plain" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.6 }}>
                <i class="icon devicon-vercel-original-wordmark" />
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;

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
          <div className="skillsFlex">
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.6 }}>
              <Tooltip title="C Programming" arrow followCursor>
                <a
                  href="https://en.wikipedia.org/wiki/C_(programming_language)"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="devicon-c-plain icon" />
                </a>
              </Tooltip>
            </motion.div>

            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.6 }}>
              <Tooltip title="C++ Programming" arrow followCursor>
                <a
                  href="https://isocpp.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon devicon-cplusplus-plain" />
                </a>
              </Tooltip>
            </motion.div>

            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.6 }}>
              <Tooltip title="Java" arrow followCursor>
                <a
                  href="https://www.java.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon devicon-java-plain" />
                </a>
              </Tooltip>
            </motion.div>

            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.6 }}>
              <Tooltip title="HTML" arrow followCursor>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon devicon-html5-plain" />
                </a>
              </Tooltip>
            </motion.div>

            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.6 }}>
              <Tooltip title="CSS" arrow followCursor>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/CSS"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon devicon-css3-plain" />
                </a>
              </Tooltip>
            </motion.div>

            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.6 }}>
              <Tooltip title="JavaScript" arrow followCursor>
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon devicon-javascript-plain" />
                </a>
              </Tooltip>
            </motion.div>

            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.6 }}>
              <Tooltip title="ReactJS" arrow followCursor>
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon devicon-react-original" />
                </a>
              </Tooltip>
            </motion.div>

            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.6 }}>
              <Tooltip title="NextJS" arrow followCursor>
                <a
                  href="https://nextjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon devicon-nextjs-plain" />
                </a>
              </Tooltip>
            </motion.div>

            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.6 }}>
              <Tooltip title="TailwindCSS" arrow followCursor>
                <a
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon devicon-tailwindcss-original" />
                </a>
              </Tooltip>
            </motion.div>

            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.6 }}>
              <Tooltip title="Redux" arrow followCursor>
                <a
                  href="https://redux.js.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon devicon-redux-original" />
                </a>
              </Tooltip>
            </motion.div>

            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.6 }}>
              <Tooltip title="Git" arrow followCursor>
                <a
                  href="https://git-scm.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="icon devicon-git-plain" />
                </a>
              </Tooltip>
            </motion.div>
          </div>
        </div>
        {disp && (
          <div className="skillsFlexContainer animate__animated animate__slideInRight ">
            <div className="skillHeading">Tools I use</div>
            <div className="skillsFlex">
              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.6 }}>
                <Tooltip title="VS Code" arrow followCursor>
                  <a
                    href="https://code.visualstudio.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon devicon-vscode-plain" />
                  </a>
                </Tooltip>
              </motion.div>

              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.6 }}>
                <Tooltip title="Postman" arrow followCursor>
                  <a
                    href="https://www.postman.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon devicon-postman-plain" />
                  </a>
                </Tooltip>
              </motion.div>

              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.6 }}>
                <Tooltip title="IntelliJ IDEA" arrow followCursor>
                  <a
                    href="https://www.jetbrains.com/idea/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon devicon-intellij-plain" />
                  </a>
                </Tooltip>
              </motion.div>

              <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.6 }}>
                <Tooltip title="Vercel" arrow followCursor>
                  <a
                    href="https://vercel.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="icon devicon-vercel-original" />
                  </a>
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

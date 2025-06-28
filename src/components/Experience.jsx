import  { useRef } from "react";
import "./Experience.scss";
import jiologo from "./../../assets/jiologo.jpg";
import internlogo from "./../../assets/internlogo.jpeg";
import ExperienceCards from "./ExperienceCards";
import * as motion from "motion/react-client";
import "animate.css";
import { Helmet } from "react-helmet-async";

const Experience = () => {
  const constraintsRef1 = useRef(null);
  const constraintsRef2 = useRef(null);

  return (
    <div className="experienceContainer">
      <Helmet>
        <title>Experience | Nishant Mourya</title>
      </Helmet>
      <div className="experienceCardList animate__animated animate__slideInRight">
        {/* This div defines the constraint area */}
        <motion.div className="dragConstraintBox" ref={constraintsRef1}>
          <motion.div
            drag
            dragConstraints={constraintsRef1}
            // dragElastic={0.2}
            // style={{ width: "fit-content" }}
          >
            <ExperienceCards
              company={"Jio Platforms Limited"}
              role={"Software Development Engineer"}
              duration={"July 2023 - Present"}
              logo={jiologo}
            />
          </motion.div>
        </motion.div>
        <motion.div className="dragConstraintBox" ref={constraintsRef2}>
          <motion.div
            drag
            dragConstraints={constraintsRef2}
            // dragElastic={0.2}
            // style={{ width: "fit-content" }}
          >
            <ExperienceCards
              company={"SkillShip Foundation"}
              role={"Web Development Intern"}
              duration={"July 2020 - Jan 2021"}
              logo={internlogo}
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;

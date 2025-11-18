import  { useRef } from "react";
import jiologo from "./../../assets/jiologo.jpg";
import ekalogo from "./../../assets/ekalogo.jpg";
import internlogo from "./../../assets/internlogo.jpeg";
import ExperienceCards from "./ExperienceCards";
import * as motion from "motion/react-client";
import { Helmet } from "react-helmet-async";
import useMobile from "../hooks/useMobile";
import "./Experience.scss";
import "animate.css";

const Experience = () => {
  const { isMobile } = useMobile();
  const constraintsRef1 = useRef(null);
  const constraintsRef2 = useRef(null);
  const constraintsRef3 = useRef(null);

  return (
    <div className="experienceContainer">
      <Helmet>
        <title>Experience | Nishant Mourya</title>
      </Helmet>
      <div  className="experienceCardList animate__animated animate__slideInRight">
       <div className="experienceCardsContainer experienceCardsContainerFlex">
         <motion.div className="dragConstraintBox" ref={constraintsRef1}>
          <motion.div
            drag
            dragConstraints={constraintsRef1}
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
        <motion.div className="dragConstraintBox" ref={constraintsRef2}>
          <motion.div
            drag
            dragConstraints={constraintsRef2}
            // dragElastic={0.2}
            // style={{ width: "fit-content" }}
          >
            <ExperienceCards
              company={"Jio Platforms Limited"}
              role={"Software Development Engineer"}
              duration={"July 2023 - Sept 2025"}
              logo={jiologo}
            />
          </motion.div>
        </motion.div>
       {isMobile && <motion.div className="dragConstraintBox" ref={constraintsRef3}>
          <motion.div
            drag
            dragConstraints={constraintsRef3}
            // dragElastic={0.2}
            // style={{ width: "fit-content" }}
          >
            <ExperienceCards
              company={"eka.care"}
              role={"Software Development Engineer"}
              duration={"Sept 2025 - Present"}
              logo={ekalogo}
            />
          </motion.div>
        </motion.div>}

       </div>
       {!isMobile && <div className="experienceCardsContainer inMobile"> 
          <motion.div className="dragConstraintBox1" ref={constraintsRef3}>
          <motion.div
            drag
            dragConstraints={constraintsRef3}
            // dragElastic={0.2}
            // style={{ width: "fit-content" }}
          >
            <ExperienceCards
              company={"eka.care"}
              role={"Software Development Engineer"}
              duration={"Sept 2025 - Present"}
              logo={ekalogo}
            />
          </motion.div>
        </motion.div>
       </div>}
      </div>
    </div>
  );
};

export default Experience;

import * as motion from "motion/react-client";
import nishantImg from "./../../assets/homeImg.jpg";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import useTyped from "../hooks/useTyped";
import { Helmet } from "react-helmet-async";
import "animate.css";
import "./Home.scss";


const Home = () => {
  const typedRef = useTyped();

  return (
    <div className="homeContainer">
      <Helmet>
        <title>Portfolio | Nishant Mourya</title>
      </Helmet>
      <div className="homeTextContainer animate__animated animate__slideInRight ">
        <div className="homeTextParent">
          <span className="homeText" ref={typedRef} />
          <br />
          <span className="homeSubText">
            a B.Tech. graduate from{" "}
            <a href="https://www.iiitkota.ac.in" target="_blank">
              <span className="college">IIIT Kota</span>
            </a>
            , working as SDE with a passion for building clean, scalable web
            apps. Always curious, always coding.
            <br />
            <a
              href="https://drive.google.com/file/d/19yrew1YZciAMzLoYxyQ7m21ojAuneAjD/view?usp=sharing"
              target="_blank"
            >
              <span className="college">
                Resume <OpenInNewIcon />
              </span>
            </a>
          </span>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <img className="homeImg" src={nishantImg} alt="Home" />
      </motion.div>
    </div>
  );
};

export default Home;

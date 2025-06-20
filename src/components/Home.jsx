import React, { useEffect, useRef } from "react";
import * as motion from "motion/react-client";
import nishantImg from "./../../assets/homeImg.jpg";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Typed from "typed.js";
import "./Home.scss";
import "animate.css";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const typedRef = useRef(null);
  const typedInstance = useRef(null); // store the instance to clean it up later

  useEffect(() => {
    if (typedRef.current) {
      typedInstance.current = new Typed(typedRef.current, {
        strings: [
          "Hi I am Nishant",
          "Hi I am a Developer",
          "Hi I am a Coder",
          "Hi I am an Engineer",
        ],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true,
      });
    }

    return () => {
      typedInstance.current?.destroy(); // clean up
    };
  }, []);

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
            <a href="https://shorturl.at/zzucs" target="_blank">
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

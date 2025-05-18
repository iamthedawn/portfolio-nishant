import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import "./Layout.scss";
import VantaBackground from "./components/VantaBackground";
import Experience from "./components/Experience";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Connect from "./components/Connect.jsx";
import Footer from "./components/Footer.jsx";

const Layout = () => {
  const location = useLocation();
  const [height, setHeight] = useState(window.innerHeight);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setHeight(window.innerHeight);
    });
  }, [window.innerHeight]);

  return (
      <div className="container" style={{ height: height, width: "100vw" }}>
      {location.pathname === "/" && <VantaBackground />}
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
      
      {location.pathname != "/" && <Footer />}
    </div>
  );
};

export default Layout;

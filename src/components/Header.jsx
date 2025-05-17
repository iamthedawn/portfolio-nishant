import React, { useState } from "react";
import "./Header.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useLocation } from "react-router-dom";
const Header = () => {
  const [mobileMenuClicked, setMobileMenuClicked] = useState(false);

  return (
    <div
      className={`${
        mobileMenuClicked && "headerContainerMobile"
      } headerContainer`}
    >
      <div className={`${
          location.pathname == "/" && "navElementsUnderline"
        } headerLogo`}
        >
        <a href="/">Nishant Mourya</a>
      </div>

      <div
        className="headerLogoMobile headerLogo"
        onClick={() => setMobileMenuClicked((prevState) => !prevState)}
      >
        {mobileMenuClicked ? <CloseIcon /> : <MenuIcon />}
        Nishant Mourya
      </div>

      <ul
        className={`${mobileMenuClicked && "navElementsMobile "} navElements`}
      >
        {mobileMenuClicked && (
          <li className={`${location.pathname == "/" && "navElementsUnderline"}`}>
            <a href="/">Home</a>
          </li>
        )}

        <li  className={`${
            location.pathname.includes("experience") && "navElementsUnderline"
          }`}>
          <a href="experience">Experience</a>
        </li>
        <li  className={`${
            location.pathname.includes("skills") && "navElementsUnderline"
          }`}>
          <a href="skills">Skills</a>
        </li>

        <li className={`${
            location.pathname.includes("projects") && "navElementsUnderline"
          }`}>
          <a href="projects">Projects</a>
        </li>
        <li className={`${
            location.pathname.includes("connect") && "navElementsUnderline"
          }`}>
          <a href="connect">Connect</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;

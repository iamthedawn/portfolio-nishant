import React, { useState } from "react";
import "./Header.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const Header = () => {
  const [mobileMenuClicked, setMobileMenuClicked] = useState(false);

  return (
    <div
      className={`${
        mobileMenuClicked && "headerContainerMobile"
      } headerContainer`}
    >
      <div className="headerLogo">
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
          <li>
            <a href="/">Home</a>
          </li>
        )}

        <li>
          <a href="experience">Experience</a>
        </li>
        <li>
          <a href="skills">Skills</a>
        </li>

        <li>
          <a href="projects">Projects</a>
        </li>
        <li>
          <a href="connect">Connect</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;

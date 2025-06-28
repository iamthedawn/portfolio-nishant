import  { useState } from "react";
import "./Header.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
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
        <Link to="/">Nishant Mourya</Link>
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
            
            <Link to="/">Home</Link>
          </li>
        )}

        <li className={`${
            location.pathname.includes("experience") && "navElementsUnderline"
          }`}>
            <Link to="experience">Experience</Link>
        </li>
        <li className={`${
            location.pathname.includes("skills") && "navElementsUnderline"
          }`}>
          <Link to="skills">Skills</Link>
        </li>

        <li className={`${
            location.pathname.includes("projects") && "navElementsUnderline"
          }`}>
          <Link to="projects">Projects</Link>
        </li>
        <li className={`${
            location.pathname.includes("connect") && "navElementsUnderline"
          }`}>
          <Link to="connect">Connect</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;

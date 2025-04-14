import React from "react";
import "./Projects.scss";
import ProjectsCard from "./ProjectsCard";
import proj1 from "./../../assets/FitIndiaProj.png";
import ticTacToe from "./../../assets/TicTacToeProj.png";
import CodeStunt from "./../../assets/CodeStuntProj.png";
import TinderClone from "./../../assets/TinderCloneProj.png";
import NetworkTeam from "./../../assets/NetworkProj.png";
import CodeRunner from "./../../assets/CodeRunnerProj.png";
import DrumPlay from "./../../assets/DrumPlayProj.png";
import DiceGame from "./../../assets/DiceGameProj.png";
import "animate.css";

const Projects = () => {
  return (
    <div className="projectsContainer">
      <div className="projectsCardList animate__animated animate__slideInRight">
        <ProjectsCard
          projName={"FitIndia Webiste"}
          projDesc={
            "A fully responsive multi-page website of Institute’s FIT INDIA Club."
          }
          projUrl={"https://fitindiaiiitkota.vercel.app/"}
          projImg={proj1}
          projUrlTxt={"fitindiaiiitkota.vercel.app"}
          projTech={"HTML,CSS,JS"}
        />
        <ProjectsCard
          projName={"TicTacToe Game"}
          projDesc={
            "A fun game deployed on a web page which can be played by 2 players."
          }
          projUrl={"https://iamthedawn.github.io/tictactoe/"}
          projImg={ticTacToe}
          projUrlTxt={"Webpage"}
          projTech={"HTML,CSS,Bootstrap,JS"}
        />
        <ProjectsCard
          projName={"CodeStunt Website"}
          projDesc={
            "A fully stack multi-page website where users can share & find code snippets"
          }
          projUrl={"https://kartik0406.github.io/Codestunt/index.html"}
          projImg={CodeStunt}
          projUrlTxt={"Webpage"}
          projTech={"HTML,CSS,JS"}
        />
        <ProjectsCard
          projName={"Tinder Clone"}
          projDesc={
            "A landing page website based on tinder theme and resembles tinder.com website."
          }
          projUrl={"https://iamthedawn.github.io/tinderclone/"}
          projImg={TinderClone}
          projUrlTxt={"Webpage"}
          projTech={"HTML,CSS,Bootstrap,JS"}
        />
        <ProjectsCard
          projName={"IIITians Network Website"}
          projDesc={
            "A landing page website which gives detailed information about members of the community."
          }
          projUrl={"https://iamthedawn.github.io/Team-1/index.html"}
          projImg={NetworkTeam}
          projUrlTxt={"Webpage"}
          projTech={"HTML,CSS,JS"}
        />
        <ProjectsCard
          projName={"Interactive Drum Kit"}
          projDesc={
            "A WebApp which lets you Tap on drum image to hear its sound — a fun way to explore percussion instruments!"
          }
          projUrl={"https://iamthedawn.github.io/drumplay/"}
          projImg={DrumPlay}
          projUrlTxt={"WebApp"}
          projTech={"HTML,CSS,JS"}
        />
        <ProjectsCard
          projName={"Dice Game"}
          projDesc={"A fun dice game deployed on a web page."}
          projUrl={"https://iamthedawn.github.io/thedicegame/"}
          projImg={DiceGame}
          projUrlTxt={"WebApp"}
          projTech={"HTML,CSS,JS"}
        />
        <ProjectsCard
          projName={"Your name in ❤️"}
          projDesc={
            "A single webpage which prints users name in Heart.It is compiled and run on the web using trinket code runner."
          }
          projUrl={"https://iamthedawn.github.io/runner/"}
          projImg={CodeRunner}
          projUrlTxt={"Webpage"}
          projTech={"HTML,CSS,Python"}
        />
      </div>
    </div>
  );
};

export default Projects;

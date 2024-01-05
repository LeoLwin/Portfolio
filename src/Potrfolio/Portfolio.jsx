// Portfolio.js

import "./Portfolio.css";
import viber from "../assets/viber.jpg";

import TextField from "@mui/material/TextField";
import { Info } from "./Info";
import Skills from "./Skills";
import { useState } from "react";
import Education from "./Education";
import Projects from "./Projects";
import AchievementAndCerti from "./AchievementAndCerti";
import Experience from "./Experience";

const Portfolio = () => {
  let a = <i className="fa-solid fa-person text-xl-start"></i>;
  const [activeIndex, setActiveIndex] = useState(0);

  const components = [
    <Info key="info" />,
    <Skills key="skill" />,
    <Experience key="experience" />,
    <Education key="education" />,
    <AchievementAndCerti key="achevement" />,
    <Projects key="projects" />,
  ];

  const toggleInfo = () => {
    setActiveIndex(0);
  };

  const toggleSkill = () => {
    setActiveIndex(1);
  };

  const toggleExperience = () => {
    setActiveIndex(2);
  };

  const toggleEducation = () => {
    setActiveIndex(3);
  };

  const toggleAchievement = () => {
    setActiveIndex(4);
  };

  const toggleProject = () => {
    setActiveIndex(5);
  };

  return (
    <div className="pto">
      <div
        id="home"
        className="rounded-3 border border-danger-subtle mx-5 mt-5"
      >
        <h3 className=" display-2 text-start ms-3">KAUNG HTET LWIN</h3>
        <p className="lead ms-3">Full-Stack Web Developer </p>
        <div className="container">
          <div className="row mt-0">
            <div className="col-3">
              <TextField
                // id="outlined-read-only-input"
                label={a}
                defaultValue="Personal Information"
                className="mt-5"
                onClick={toggleInfo}
                InputProps={{
                  readOnly: true,
                }}
              />
              <br />
              <TextField
                id="outlined-read-only-input"
                label={<i className="fa fa-tasks" aria-hidden="true"></i>}
                defaultValue="Skills"
                className="mt-3"
                onClick={toggleSkill}
                InputProps={{
                  readOnly: true,
                }}
              />
              <br />
              <TextField
                id="outlined-read-only-input"
                label={<i className="fa fa-history" aria-hidden="true"></i>}
                defaultValue="Experience"
                className="mt-3"
                onClick={toggleExperience}
                InputProps={{
                  readOnly: true,
                }}
              />
              <br />
              <TextField
                id="outlined-read-only-input"
                label={<i className="fa-solid fa-user-graduate"></i>}
                defaultValue="Education "
                className="mt-3"
                onClick={toggleEducation}
                InputProps={{
                  readOnly: true,
                }}
              />
              <br />
              <TextField
                id="outlined-read-only-input"
                label={<i className="fa-solid fa-trophy"></i>}
                defaultValue="Achievments & Certificate "
                className="mt-3"
                onClick={toggleAchievement}
                InputProps={{
                  readOnly: true,
                }}
              />
              <br />
              <TextField
                id="outlined-read-only-input"
                label={<i className="fa-solid fa-diagram-project"></i>}
                defaultValue="Projects"
                className="mt-3 mb-5"
                onClick={toggleProject}
                InputProps={{
                  readOnly: true,
                }}
              />
              <br />
            </div>

            <div className="col-9 mt-5">{components[activeIndex]}</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2023 Your Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;

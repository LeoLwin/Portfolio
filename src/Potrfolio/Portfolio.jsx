import "./Portfolio.css";
import { Info } from "./Info";
import Skills from "./Skills";
import { useState } from "react";
import Education from "./Education";
import Projects from "./Projects";
import AchievementAndCerti from "./AchievementAndCerti";
import Experience from "./Experience";
import View from "./View";
import Contact from "./Contact";
import SampleComponent from "./SampleComponent";

const Portfolio = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const components = [
    <View key="view" />,
    <Info key="info" />,
    <Skills key="skill" />,
    <Experience key="experience" />,
    <Education key="education" />,
    <AchievementAndCerti key="achievement" />,
    <Projects key="projects" />,
    <Contact key="contact" />,
    <SampleComponent key="sampleComponen" />
  ];

  const toggleView = () => {
    setActiveIndex(0);
  };

  const toggleInfo = () => {
    setActiveIndex(1);
  };

  const toggleSkill = () => {
    setActiveIndex(2);
  };

  const toggleExperience = () => {
    setActiveIndex(3);
  };

  const toggleEducation = () => {
    setActiveIndex(4);
  };

  const toggleAchievement = () => {
    setActiveIndex(5);
  };

  const toggleProject = () => {
    setActiveIndex(6);
  };

  const toggleContact = () => {
    setActiveIndex(7);
  };

  const toggleSample = () => {
    setActiveIndex(8);
  }


  return (
    <div className="pto mb-5">
      <div
        id="home"
        className="rounded-3 border border-danger-subtle mx-5 mt-5 portfolio"
      >
        <div className="d-flex flex-column justify-content-start col-sl-12" onDoubleClick={toggleView}>
          <h3 className="display-2 fs-3 text-start ms-3 sm:fs-5 mt-2">KAUNG HTET LWIN</h3>
          <p className="mb-0 ms-3 sm:fs-5">Full-Stack Web Developer </p>

          {/* <div className=" ms-auto me-5 pe-2 text-end text-info h4">
            <a
              href="https://www.facebook.com/monday2021"
              className="me-2 facebook h4"
            > 
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/kaung-htet-lwin-b77462280/"
              className="linkdin h4 me-2"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/LeoLwin" className="text-dark h4">
              <i className="fa-brands fa-github"></i>{" "}
            </a>
          </div> */}
        </div>
        <div className="d-flex justify-content-start mt-4">
          <div className="ms-3 text-info h4">
            <a
              href="https://www.facebook.com/monday2021"
              className="me-2 facebook h4"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/kaung-htet-lwin-b77462280/"
              className="linkdin h4 me-2"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com/LeoLwin" className="text-dark h4">
              <i className="fa-brands fa-github"></i>
            </a>
            <button
              className=" ms-2 btn rounded-1 text-dark border-dark "
              onClick={toggleContact}
            >
              Contact
            </button>
          </div>
        </div>


        <div className="container mt-0">
          <div className="row mt-0">
            <div className="col-12 col-md-12 col-lg-3">
              <div className="mb-2 mt-5" onClick={() => { toggleInfo(); trackButtonClick('android-apk', 'Download APK'); }}>
                <p className="label-testa">
                  <i className="fa-solid fa-person text-xl-start"></i>{" "}
                </p>
                <label htmlFor="" className="label-testb text-start pt-3 ">
                  Personal information
                </label>
              </div>
              <div className="mb-2" onClick={toggleSkill}>
                <p className="label-testa">
                  <i className="fa fa-tasks" aria-hidden="true"></i>
                </p>
                <label htmlFor="" className="label-testb text-start pt-3 ">
                  Skill
                </label>
              </div>
              <div className="mb-2" onClick={toggleExperience}>
                <p className="label-testa">
                  <i className="fa fa-history" aria-hidden="true"></i>{" "}
                </p>
                <label htmlFor="" className="label-testb text-start pt-3 ">
                  Experience
                </label>
              </div>
              <div className="mb-2" onClick={toggleEducation}>
                <p className="label-testa">
                  <i className="fa-solid fa-user-graduate"></i>
                </p>
                <label htmlFor="" className="label-testb text-start pt-3 ">
                  Education
                </label>
              </div>
              <div className="mb-2" onClick={toggleAchievement}>
                <p className="label-testa">
                  <i className="fa-solid fa-trophy"></i>
                </p>
                <label htmlFor="" className="label-testb text-start pt-3 ">
                  Achievements
                </label>
              </div>
              <div className="mb-2" onClick={toggleProject}>
                <p className="label-testa">
                  <i className="fa-solid fa-diagram-project"></i>{" "}
                </p>
                <label htmlFor="" className="label-testb text-start pt-3 ">
                  Projects
                </label>
              </div>
            </div>
            <div className="col-12 col-md-12  col-lg-9 mt-5">{components[activeIndex]}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

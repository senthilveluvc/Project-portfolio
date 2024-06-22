import React from "react";
import Skills from "./Skills.jsx";
import Resume from "../images/Resume_cv.jpg";
import { FaFileDownload } from "react-icons/fa";
const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi, my name is <b>Senthilvelu V.C.</b> and I am from Chennai.
            I'm a <b>Frontend web developer</b> and a student completed <b>BA in English Literature</b>. <br />
            <br />
            I love to create projects with beautiful designs and put my own
            twists on it, you can check out some of my work in the projects
            section.
            <br />
            <br />I am <b>open</b> to new collaborations or work where I can
            contribute and grow. Feel free to connect with me, links are in the
            footer.
            <br />
            Apart from coding I can handle databases like mysql and do
            content writing in my spare time.
          </p>
          <a href={Resume} download="Resume" className="resume-btn">
            <button>
              Download Resume <FaFileDownload></FaFileDownload>
            </button>
          </a>
        </div>

        <div></div>
      </div>

      <h1 className="SkillsHeading"> Skillset</h1>
      <div className="skills">
        <Skills skill="HTML" />
        <Skills skill="CSS" />
        <Skills skill="Bootstrap" />
        <Skills skill="Tailwind" />
        <Skills skill="Javascript" />
        <Skills skill="React" />
        <Skills skill="Nodejs" />
        <Skills skill="Github" />
        <Skills skill="Mysql" />
        <Skills skill="Npm" />
      </div>
    </>
  );
};

export default About;

import React from "react";
// import { CgCPlusPlus } from "react-icons/cg";
import {
  FaReact,
  FaGithub,
  FaNpm,
  FaBootstrap,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";
import { DiJavascript1, DiMysql, DiNodejs } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";

const Skills = ({ skill }) => {
  const icon = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3 />,
    Javascript: <DiJavascript1 />,
    Bootstrap: <FaBootstrap />,
    Tailwind: <SiTailwindcss />,
    React: <FaReact />,
    Github: <FaGithub />,
    Npm: <FaNpm />,
    Mysql: <DiMysql />,
    Nodejs: <DiNodejs />
  };

  return (
    <div title={skill} className="SkillBox">
      {icon[skill]}
    </div>
  );
};

export default Skills;

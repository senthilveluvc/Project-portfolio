import React from "react";
import ProjectBox from "./ProjectBox";
import portfolio from "../images/portfoliomockup.jpg";
import realestate from "../images/realestatemockup.jpg";
import webdev from "../images/webdevmockup.jpg";
import foodapp from "../images/foodappmockup.jpg";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={portfolio} projectName="Portfolio" />
        <ProjectBox projectPhoto={realestate} projectName="Realestate_model" />
        <ProjectBox projectPhoto={webdev} projectName="Blogpage_model" />
        <ProjectBox projectPhoto={foodapp} projectName="Foodapp_model" />
      </div>
    </div>
  );
};

export default Projects;

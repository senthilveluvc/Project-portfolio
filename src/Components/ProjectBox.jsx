import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    PortfolioDesc:
      "This website tells about my works with live examples. This helped me understand React better and more clearly. I also learned how to host on vercel.",
    PortfolioWebsite: "https://project-portfolio-mu-eight.vercel.app/",

    Realestate_modelDesc:
      "This web app  is for helping you find your desired House. The project helped me with understanding the working of media querries. I also learned new CSS properties and tricks.",
    Realestate_modelWebsite: "https://react-projects-eta-woad.vercel.app/",

    Blogpage_modelDesc:
      "This website is a model representation of individual's blog and contents. Html and css are used mainly to develop this site. A simple Navbar with links is created.",
      Blogpage_modelWebsite: "https://project-webdev-pi.vercel.app/",

      Foodapp_modelDesc:
      "This webpage is was made for a Food brand showcasing their eatables with prices. The project taught me how to use grids and arrange text in a much better way.",
      Foodapp_modelWebsite: "https://project-foodapp.vercel.app/",
  };

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        {/* <a href={desc[projectName + "Github"]} target="_blank">
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a> */}

        <a href={desc[projectName + "Website"]} target="_blank">
          <button className="projectbtn">
            <CgFileDocument /> Site
          </button>
        </a>
      </div>
    </div>
  );
};
export default ProjectBox;

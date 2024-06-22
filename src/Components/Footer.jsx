import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  const date = new Date();
  let year = date.getFullYear();
  return (
    <footer>
      <h4>Copyright &copy; {year} | All Rights Reserved.</h4>
      <div className="footerLinks">
        <a href="https://www.linkedin.com/in/senthilvelu-v-c-18967a158/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/senthilvelu_vc/" target="_blank">
          <FaInstagram />
        </a>

        <a href="mailTo:senthilv789@gmail.com" target="_blank">
          <GrMail />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

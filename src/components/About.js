import React from "react";
import "../styles/About.css";
import { FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";

const About = () => {
  return (
    <section className="section2">
      <div className="container2">
        <div className="content-section GradientBorder">
          <div className="title">
            <h1>About</h1>
          </div>
          <div className="content">
            <img
              src={require("../assets/sujal.jpg")}
              className="avatar-img"
              alt="sujal"
            />
            <p>
              I am a self-taught web developer. I am currently pursuing my
              bachelor's degree in Electrical and Engineering from Manipal
              Institute of Technology, Manipal. I am a passionate learner who's
              always willing to learn and work across technologies and domains.
              I love to explore new technologies and leverage them to solve
              real-life problems.
            </p>
          </div>
          <div className="social">
            <a href="https://www.linkedin.com/in/sujal-ranjan-0073401b3/">
              <FaLinkedin className="icons" />
            </a>
            <a href="mailto: sranjan0208@gmail.com">
              <MdMail className="icons" />
            </a>
            <a href="https://github.com/Sranjan0208">
              <FaGithubSquare className="icons" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

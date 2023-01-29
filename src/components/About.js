import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <section>
      <div className="section2">
        <div className="split up">
          <img
            src={require("../assets/sujal.jpg")}
            alt="Sujal"
            className="image"
          ></img>
        </div>
        <div className="split down">
          <p className="text">
            I am a Full Stack Web Developer. I am passionate about Web
            Development and I love to learn new technologies. I am currently
            learning ReactJS and I am looking forward to learn more.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

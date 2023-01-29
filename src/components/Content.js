import React from "react";
import "../styles/Content.css";
import About from "./About";
import MouseScroll from "./MouseScroll";
import Tech from "./Tech";

const Content = () => {
  return (
    <>
      <section>
        <div className="section1">
          <div className="name_section">
            <h1 className="name-intro">Hi, I'm </h1>
            <span className="name">Sujal Ranjan</span>
          </div>
        </div>
      </section>
      <MouseScroll />

      <About />

      <Tech />
    </>
  );
};

export default Content;

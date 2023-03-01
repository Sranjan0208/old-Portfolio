import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "../styles/Content.css";
import About from "./About";
import MouseScroll from "./MouseScroll";

import * as FaIcons from "react-icons/fa";
import Skills from "./Skills";

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

      {/* <Routes>
        <Route path="/About" element={<About />} />
      </Routes> */}

      <About />

      <Skills />
    </>
  );
};

export default Content;

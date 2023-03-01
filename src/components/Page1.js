import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Introduction from "./Introduction";
import "../styles/Page1.css";

const Welcome = () => {
  const year = new Date().getFullYear();
  return (
    <div className="welcome">
      <img
        src={require("../assets/welcome.png")}
        alt="welcome"
        className="wave"
      />

      <div class="wrapper">
        <Link
          to="/introduction"
          reloadDocument="true"
          className="welcome-button"
        >
          WELCOME
        </Link>
      </div>

      <Routes>
        <Route path="/introduction" element={<Introduction />} />
      </Routes>

      <footer>
        <p>Copyright ⓒ {year}</p>
      </footer>
    </div>
  );
};

export default Welcome;

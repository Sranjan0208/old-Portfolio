import React from "react";
import "../styles/Loading.css";

const Loading = () => {
  return (
    <>
      <div id="loop" className="center"></div>
      <div id="bike-wrapper" className="center">
        <div id="bike" className="centerBike"></div>
      </div>
    </>
  );
};

export default Loading;

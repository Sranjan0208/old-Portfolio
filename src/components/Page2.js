import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import "../styles/Page2.css";
import Content from "./Content";

const Introduction = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <video autoPlay muted loop id="myVideo">
          <source src={require("../assets/Tunnel.mp4")} type="video/mp4" />
        </video>
        <div className="bg-overlay"></div>
        <Content />
      </>
    );
  }
};

export default Introduction;

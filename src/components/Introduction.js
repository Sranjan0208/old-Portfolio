import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import "../styles/Introduction.css";
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
          {/* <Content /> */}
        </video>
        <div className="bg-overlay"></div>
        {/* <Navbar /> */}
        <Content className="snap-start" />
      </>
    );
  }
};

export default Introduction;

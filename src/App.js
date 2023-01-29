import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Welcome from "./components/Page1";
import Introduction from "./components/Page2";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/introduction" element={<Introduction />} />
      </Routes>
    </>
  );
};

export default App;

import React from "react";
import "../assets/css/Slides.css";
import LeftPanel from "./landing/LeftPanel";
import RightPanel from "./landing/RightPanel";
import devText from "../assets/text/dev-text";

const Slides = () => {
  return (
    <div className="slides">
      <div className="panels">
        <LeftPanel longtext={devText} />
        <RightPanel />
      </div>
    </div>
  );
};

export default Slides;

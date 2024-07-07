import React from "react";
import "../../assets/css/RightPanel.css";
import FillBar from "./FillBar";

const RightPanel = () => {
  return (
    <div className="container">
      <div className="slant-right">
        <div className="title">Skills</div>
        <div className="block">
          <ul>
            <li>hello</li>
            <FillBar style={{ width: "80%" }} />

            <li>next</li>
            <FillBar style={{ width: "80%" }} />

            <li>java</li>
            <FillBar style={{ width: "80%" }} />

            <li>another</li>
            <FillBar style={{ width: "80%" }} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;

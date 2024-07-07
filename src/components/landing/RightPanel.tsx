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
            <li>
              <FillBar style={{ width: "80%" }} />
            </li>

            <li>next</li>
            <li>
              <FillBar style={{ width: "80%" }} />
            </li>

            <li>java</li>
            <li>
              <FillBar style={{ width: "60%" }} />
            </li>

            <li>another</li>
            <li>
              <FillBar style={{ width: "80%" }} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;

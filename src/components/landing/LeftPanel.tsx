import React from "react";
import "../../assets/css/LeftPanel.css";
import devText from "../../assets/text/dev-text";

interface Props {
  longtext: string;
}
const LeftPanel = ({ longtext }: Props) => {
  return (
    <div className="container">
      <div className="slant-left">
        <div className="content">
          <div className="title">Jocelyn Shen</div>
          <div className="label">Developer</div>
          <div className="text">{longtext}</div>
        </div>
      </div>
    </div>
  );
};

export default LeftPanel;

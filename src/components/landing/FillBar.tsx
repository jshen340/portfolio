import React from "react";
import "../../assets/css/FillBar.css";
interface Props {
  style: React.CSSProperties;
}
const FillBar = ({ style }: Props) => {
  return (
    <div className="full-bar">
      <div className="inner-bar" style={style}></div>
    </div>
  );
};

export default FillBar;

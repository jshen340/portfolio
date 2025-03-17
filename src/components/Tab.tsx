import React, { useState } from "react";
interface Props {
  label: string;
  onClick: () => void;
  isActive: boolean;
  way: string;
}
const Tab = ({ label, onClick, isActive, way }: Props) => (
  <div className={`tab ${way} ${isActive ? "active" : ""}`} onClick={onClick}>
    {label}
  </div>
);

export default Tab;

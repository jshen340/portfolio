import React, { useState } from "react";
interface Props {
  label: string;
  onClick: () => void;
  isActive: boolean;
}
const Tab = ({ label, onClick, isActive }: Props) => (
  <div className={`tab ${isActive ? "active" : ""}`} onClick={onClick}>
    {label}
  </div>
);

export default Tab;

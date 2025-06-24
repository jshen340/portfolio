import React, { useState, useEffect } from "react";
import "../assets/css/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="home">J.SHEN</div>
      </Link>
    </div>
  );
};

export default Header;
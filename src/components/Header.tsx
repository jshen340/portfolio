import React, { useState, useEffect } from "react";
import "../assets/css/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`header ${scrollPosition === 0 ? "fixed" : ""}`}>
      <Link to="/">
        <div className="home">J.SHEN</div>
      </Link>
    </div>
  );
};

export default Header;

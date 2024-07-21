import React from "react";
import "../assets/css/Hero.css";
const Hero = () => {
  return (
    <div className="container">
      <div className="intro-text">
        <div className="topper">Hello, I'm</div>
        <div className="title">Jocelyn</div>
        <div className="label">developer</div>
        <p className="text">
          Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius.
          Nibh tortor id aliquet lectus proin nibh condimentum.
        </p>
      </div>
      <div className="menu">
        <a href="#sbs-r" className="btn-in-page">
          About
        </a>
        <a href="#services" className="btn-in-page">
          Experience
        </a>
        <a href="#sbs" className="btn-in-page">
          Projects
        </a>
        <a href="#gallery" className="btn-in-page">
          Contact
        </a>
        <a href="#resume" className="res-link">
          resume
        </a>
      </div>
    </div>
  );
};

export default Hero;

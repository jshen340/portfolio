import React from "react";
import "../assets/css/Hero.css";
import Portrait from "../assets/flower-portrait.png";
import Header from "./Header";
const Hero = () => {
  return (
    <div className="container">
      {/* <Header /> */}

      <div className="panel">
        <div className="home">J.SHEN</div>
        <div className="intro-text">
          <div className="topper">Hello, I'm</div>
          <div className="title">Jocelyn</div>
          <div className="label">SHEN</div>
          <p className="text">
            I am currently a 5th year student at Georgia Tech, working on my
            computer science degree with a focus on media and intelligence.
            <br />
            <br />I have a passion of solving problems and creating new things.
            In my free time, I draw, read, and hang out with my cat.
          </p>
          <a href="/resume.pdf" download className="resume">
            Resume
          </a>
        </div>
      </div>
      <div className="img-panel">
        {/* <img src={Menu} alt="" className="menu" /> */}
        <img src={Portrait} alt="" className="portrait" />
      </div>
    </div>
  );
};

export default Hero;

{
  /* <div className="menu">
        <a href="#sbs-r" className="btn-in-page">
          <Link to="/hero">About</Link>
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
      </div> */
}

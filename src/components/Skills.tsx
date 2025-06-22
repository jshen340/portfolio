import React from "react";
import Python from "../assets/icons/python.svg";
import React_Icon from "../assets/icons/react.svg";
import Tableau from "../assets/icons/tableau.svg";
import Javascript from "../assets/icons/javascript.svg";
import HTML from "../assets/icons/html.svg";
import CSS from "../assets/icons/css.svg";
import SQL from "../assets/icons/sql.svg";
import Git from "../assets/icons/git.svg";
import AWS from "../assets/icons/aws.svg";
import AndroidStudio from "../assets/icons/android.svg";
import Vue from "../assets/icons/vue.svg";
import Angular from "../assets/icons/angular.svg";
import Figma from "../assets/icons/figma.svg";
import "../assets/css/Skills.css";
const Skills = () => {
  return (
    <>
      <div className="container-skills">
        <h2 className="header-skills">Skills</h2>
        <div className="images">
          <img src={Python} alt="Python" />
          <img src={React_Icon} alt="React" />
          <img src={Tableau} alt="Tableau" />
          <img src={Javascript} alt="Javascript" />
          <img src={HTML} alt="HTML" />
          <img src={CSS} alt="CSS" />
          <img src={SQL} alt="SQL" />
          <img src={Git} alt="Git" />
          <img src={AWS} alt="AWS" />
          <img src={AndroidStudio} alt="Android Studio" />
          <img src={Vue} alt="Vue" />
          <img src={Angular} alt="Angular" />
          <img src={Figma} alt="Figma" />
        </div>
      </div>
    </>
  );
};

export default Skills;

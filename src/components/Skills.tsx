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
import "../assets/css/Skills.css";
const Skills = () => {
  return (
    <>
      <div className="container-skills">
        <h2 className="header">Skills</h2>
        <div className="images">
          <img src={Python} alt="" />
          <img src={React_Icon} alt="" />
          <img src={Tableau} alt="" />
          <img src={Javascript} alt="" />
          <img src={HTML} alt="" />
          <img src={CSS} alt="" />
          <img src={SQL} alt="" />
          <img src={Git} alt="" />
          <img src={AWS} alt="" />
          <img src={AndroidStudio} alt="" />
          <img src={Vue} alt="" />
          <img src={Angular} alt="" />
        </div>
      </div>
    </>
  );
};

export default Skills;

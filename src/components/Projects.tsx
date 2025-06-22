import React from "react";
import CarouselSlide from "./CarouselSlide";
import "../assets/css/Projects.css";
import { Link } from "react-router-dom";
export const Projects = () => {
  return (
    <>
      <div className="container-project">
        <h2>Projects</h2>
        <CarouselSlide />
        <Link to="/allprojects">
          <button className="all-projects">see all projects</button>
        </Link>
      </div>
    </>
  );
};

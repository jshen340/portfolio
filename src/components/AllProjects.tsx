import React from "react";
import Banner from "./Banner";
import "../assets/css/AllProjects.css";
import { Link } from "react-router-dom";

const AllProjects = () => {
  return (
    <>
      <div className="project-background">
        <Link to="/">
          <div className="home">J.SHEN</div>
        </Link>
        <div className="title projects">All Projects</div>
        <div className="project-container">
          <Link to="/unibuzzy">
            <Banner
              image="Unibuzzy"
              title="Unibuzzy"
              description="This is a comprehensive campus app for all things college life."
            />
          </Link>
          <Link to="/wildfire">
            <Banner
              image="Wildfire"
              title="Wildfire Simulation"
              description="Modeling the spread of wildfire using OpenGL."
            />
          </Link>
          <Link to="/spotify">
            <Banner
              image="Spotify"
              title="Spotify Wrapped"
              description="Get your Spotify Wrapped. Every month."
            />
          </Link>
          <Link to="/stockanalysis">
            <Banner
              image="Stonks"
              title="Stock Analysis"
              description="Backtesting and analysis of stocks."
            />
          </Link>
        </div>
      </div>
    </>
  );
};

export default AllProjects;

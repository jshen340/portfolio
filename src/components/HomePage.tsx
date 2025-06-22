import React from "react";
import Title from "./Title";
import Hero from "./Hero";
import TabGroup from "./TabGroup";
import CarouselSlide from "./CarouselSlide";
import Contact from "./Contact";
import Skills from "./Skills";
import "../assets/css/HomePage.css";
import { Projects } from "./Projects";
export const HomePage = () => {
  return (
    <div className="wrapper">
      <section className="section">
        <Hero />
      </section>
      <section className="section">
        <Projects />
      </section>
      <section className="section">
        <TabGroup />
      </section>
      <section className="section">
        <Skills />
      </section>
      <section className="section">
        <Contact />
      </section>
      <div className="footer">© 2025 Jocelyn Shen</div>
    </div>
  );
};

import React from "react";
import Title from "./Title";
import Hero from "./Hero";
import TabGroup from "./TabGroup";
import CarouselSlide from "./CarouselSlide";
import Contact from "./Contact";
import Skills from "./Skills";
import "../assets/css/HomePage.css";
import { Project } from "./Project";
export const HomePage = () => {
  return (
    // <>
    //   <section className="y mandatory-scroll-snapping" dir="ltr">
    //     <Hero/>
    //     <div>2</div>
    //     <div>3</div>
    //     <div>4</div>
    //     <div>5</div>
    //   </section>
    // </>
    <div className="wrapper">
      <section className="section">
        <Hero />
      </section>
      <section className="section">
        <Project />
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
    </div>
  );
};

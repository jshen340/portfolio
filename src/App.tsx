import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Hero from "./components/Hero";
import CarouselSlide from "./components/CarouselSlide";
import TabGroup from "./components/TabGroup";
import Title from "./components/Title";
import Contact from "./components/Contact";
function App() {
  return (
    <div className="App">
      <Hero />
      <Title title="Experience" />
      <TabGroup />
      <Title title="Projects" />
      <CarouselSlide />
      <Title title="Contact" />
      <Contact />
    </div>
  );
}

export default App;

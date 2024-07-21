import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import LeftPanel from "./components/landing/LeftPanel";
import RightPanel from "./components/landing/RightPanel";
import devText from "./assets/text/dev-text";
import Slideshow from "./components/Slideshow";
import Hero from "./components/Hero";
import CarouselSlide from "./components/CarouselSlide";
import TabGroup from "./components/TabGroup";
function App() {
  return (
    <div className="App">
      <Hero />
      <TabGroup />
      <CarouselSlide />
    </div>
  );
}

export default App;

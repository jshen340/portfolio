import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Hero from "./components/Hero";
import CarouselSlide from "./components/CarouselSlide";
import TabGroup from "./components/TabGroup";
import Title from "./components/Title";
import Contact from "./components/Contact";
import { HomePage } from "./components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/hero" element={<Hero />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/hello" element={<CarouselSlide />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import LeftPanel from "./components/landing/LeftPanel";
import RightPanel from "./components/landing/RightPanel";
import devText from "./assets/text/dev-text";
import Slideshow from "./components/Slideshow";
function App() {
  return (
    <div className="App">
      {/* <Slideshow /> */}
      <div className="slides">
        <div className="panels">
          <LeftPanel longtext={devText} />
          <RightPanel />
        </div>
      </div>
    </div>
  );
}

export default App;

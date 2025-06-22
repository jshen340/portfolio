import "./App.css";
import Hero from "./components/Hero";
import CarouselSlide from "./components/CarouselSlide";
import { HomePage } from "./components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllProjects from "./components/AllProjects";
import Project from "./components/Project";
import UnibuzzyProject from "./assets/text/unibuzzy-project";
import SpotifyProject from "./assets/text/spotify-project";
import WildfireProject from "./assets/text/wildfire-project";
import StocksProject from "./assets/text/stocks-project";
import Unibuzzy from "./assets/on_page/unibuzzy.png";
import Spotify from "./assets/on_page/spotify.png";
import Wildfire from "./assets/on_page/wildfire.png";
import Stonks from "./assets/on_page/stonk.png";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/hero" element={<Hero />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/hello" element={<CarouselSlide />} />
          <Route path="/allprojects" element={<AllProjects />} />
          <Route
            path="/unibuzzy"
            element={
              <Project
                title="uniBuzzy"
                image={Unibuzzy}
                description={<UnibuzzyProject />}
              />
            }
          />
          <Route
            path="/spotify"
            element={
              <Project
                title="Monthly Spotify Wrapped"
                image={Spotify}
                description={<SpotifyProject />}
              />
            }
          />
          <Route
            path="/wildfire"
            element={
              <Project
                title="Wildfire Simulation"
                image={Wildfire}
                description={<WildfireProject />}
              />
            }
          />
          <Route
            path="/stockanalysis"
            element={
              <Project
                title="Stock Analysis"
                image={Stonks}
                description={<StocksProject />}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

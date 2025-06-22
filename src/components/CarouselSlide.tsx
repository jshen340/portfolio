import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../assets/css/CarouselSlide.css";
import gray from "../assets/gray.png";
import Unibuzzy from "../assets/circle/unibuzzy.png";
import Spotify from "../assets/circle/spotify.png";
import Stonk from "../assets/circle/stonk.png";
import Wildfire from "../assets/circle/wildfire.png";

import { Link } from "react-router-dom";
const CarouselSlide = () => {
  return (
    <>
      <div className="slide-container">
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 3,
              partialVisibilityGutter: 0,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 1,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
          }}
          sliderClass=""
          slidesToSlide={1}
          swipeable
        >
          <Link to="/unibuzzy">
            <div className="project">
              <img className="photo" src={Unibuzzy} alt="" />
              <h4>uniBuzzy</h4>
              <p>An interactive hub for all things college.</p>
            </div>
          </Link>
          <Link to="/spotify">
            <div className="project">
              <img className="photo" src={Spotify} alt="" />
              <h4>Monthly Wrapped</h4>
              <p>Spotify Wrapped. Every month.</p>
            </div>
          </Link>
          <Link to="/wildfire">
            <div className="project">
              <img className="photo" src={Wildfire} alt="" />
              <h4>Wildfire Simulation</h4>
              <p>Modeling the spread of wildfire graphically.</p>
            </div>
          </Link>
          <Link to="/stockanalysis">
            <div className="project">
              <img className="photo" src={Stonk} alt="" />
              <h4>Stock Performance Evaluation</h4>
              <p>Backtesting and analyzing stocks.</p>
            </div>
          </Link>
        </Carousel>
      </div>
    </>
  );
};

export default CarouselSlide;

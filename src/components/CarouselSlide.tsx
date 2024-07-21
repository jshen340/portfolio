import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../assets/css/CarouselSlide.css";
import gray from "../assets/gray.png";
const CarouselSlide = () => {
  return (
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
          partialVisibilityGutter: 40,
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
      <div className="project">
        <img className="photo" src={gray} alt="" />
        <h4>UniBuzzy</h4>
        <p>An interactive hub for all things college.</p>
      </div>
      <div className="project">
        <img className="photo" src={gray} alt="" />
        <h4>Monthly Wrapped</h4>
        <p>Spotify Wrapped. Every month.</p>
      </div>
      <div className="project">
        <img className="photo" src={gray} alt="" />
        <h4></h4>
        <p></p>
      </div>
      <div className="project">
        <img className="photo" src={gray} alt="" />
        <h4></h4>
        <p></p>
      </div>
      <div className="project">
        <img className="photo" src={gray} alt="" />
        <h2></h2>
        <p></p>
      </div>
    </Carousel>
  );
};

export default CarouselSlide;

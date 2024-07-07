import React from "react";
import Slider from "react-slick";
import Slides from "./Slides";
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 20,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <Slides />
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
}
// import { useState } from "react";
// import Carousel from "react-bootstrap/Carousel";
// import Slides from "./Slides";
// function Slideshow() {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex: number) => {
//     setIndex(selectedIndex);
//   };
//   return (
//     <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
//       <Carousel.Item>
//         <Slides />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <Slides />
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <Slides />
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default Slideshow;

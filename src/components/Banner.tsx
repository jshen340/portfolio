import React from "react";
import Unibuzzy from "../assets/banners/unibuzzy.png";
import Wildfire from "../assets/banners/wildfire.png";
import Spotify from "../assets/banners/spotify.png";
import Stonk from "../assets/banners/stonk.png";
import "../assets/css/Banner.css";
interface Props {
  image: string;
  title: string;
  description: string;
}
const imageMap: { [key: string]: string } = {
  Unibuzzy: Unibuzzy,
  Wildfire: Wildfire,
  Spotify: Spotify,
  Stonks: Stonk,
};

const Banner = ({ image, title, description }: Props) => {
  const selectedImage = imageMap[image];

  return (
    <>
      <div className="cont">
        <div className="shadow-box"> </div>
        <div className="banner-container">
          <div className="image-container">
            <img src={selectedImage} alt="Unibuzzy App" className="image" />
            <div className="overlay">
              <h3>{title}</h3>
              <p className="desc">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;

import React from "react";
import "./BannerAds.css";
import bannerImg1 from "./banner-img1.jpg";
import bannerImg2 from "./banner-img2.jpg";

import Slider from "react-slick";

function Ads() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 10000,
    infinite: true,
  };

  const images = [bannerImg1, bannerImg2];
  return (
    <div className="bannerads">
      <div className="slider-container">
        <Slider {...settings}>
          {images.map((url, index) => (
            <div className="image-container" key={index}>
              <img
                className="banner-img"
                src={url}
                alt={`images ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Ads;

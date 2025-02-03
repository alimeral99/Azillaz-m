import React from "react";
import "./BannerAds.css";
import Slider from "react-slick";

function Ads() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 10000,
    infinite: true,
  };

  const images = [
    "https://images.unsplash.com/photo-1525449167632-e115f893bfd9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxzbWFsbHxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1520575839349-52ff2532d910?q=80&w=1633&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1681914677025-b6e2afef8036?q=80&w=1533&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
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

      <div className="bannerads-content">
        <h3 className="bannerads-header">Over 10,56,432 Active Ads</h3>
        <h2 className="bannerads-text">
          Buy, Sell, Rent & Exchange in one Click.
        </h2>
        <div className="bannerads-links">
          <div className="link-group">
            <h6 className="links-header">What’s Popular: </h6>
            <a
              href="#
            "
            >
              Animal
            </a>
            <a
              href="#
            "
            >
              Real Estate
            </a>
            <a
              href="#
            "
            >
              Mobile Phone
            </a>
            <a
              href="#
            "
            >
              Electronics
            </a>
            <a
              href="#
            "
            >
              Vehicles
            </a>
            <a
              href="#
            "
            >
              Pets
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ads;

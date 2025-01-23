import React from "react";
import "./BannerAds.css";

function Ads() {
  return (
    <div className="bannerads">
      <img
        src="https://wallpapers.com/images/hd/dark-gradient-rpa97mj9dhic8raf.jpg"
        alt=""
      />
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

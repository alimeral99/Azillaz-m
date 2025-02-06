import React, { useRef } from "react";
import "./PopularLocations.css";
import Slider from "react-slick";

function PopularLocation() {
  const sliderRef = useRef(null);

  const cities = [
    "Istanbul",
    "Ankara",
    "Izmir",
    "Antalya",
    "Bursa",
    "Adana",
    "Gaziantep",
    "Konya",
    "Mersin",
    "Samsun",
    "Trabzon",
    "Diyarbakir",
    "Kayseri",
    "Eskisehir",
    "Malatya",
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    draggable: true,
    swipeToSlide: true,
    pauseOnHover: true,
    arrows: false,
    cssEase: "linear",
  };

  return (
    <div className="mt-2 popular-location">
      <div className="popular-locationContainer">
        <h1 className="popular-locationText">Popular Location</h1>

        {
          <Slider {...settings} ref={sliderRef}>
            {cities.map((city, index) => (
              <div className="button-containers" key={index}>
                <button key={index} className="popular-locationBtn button">
                  {city}
                </button>
              </div>
            ))}
          </Slider>
        }
      </div>
    </div>
  );
}

export default PopularLocation;

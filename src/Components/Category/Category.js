import React, { useState, useEffect } from "react";
import "./Category.css";
import Slider from "react-slick";

function Category() {
  const categories = [
    "emlak",
    "acil",
    "test",
    "araç",
    "takas",
    "elektirik",
    "giyim  moda",
    "hizmet",
    "yedek parça",
    "emlak",
    "yedek parça",
  ];

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    draggable: true,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <div className="categories">
      {" "}
      <Slider {...settings}>
        {categories.map((category, index) => (
          <div className="button-containers" key={index}>
            <button key={index} className="button popular-locationBtn">
              {category}
            </button>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Category;

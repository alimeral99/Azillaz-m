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
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    draggable: true,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1154,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 909,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
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

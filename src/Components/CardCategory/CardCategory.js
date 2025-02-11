import React, { useRef } from "react";
import "./CardCategory.css";
import Card from "../CardList/Card/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";

function CardCategory({ cardCategoryData, cardCategoryText }) {
  const sliderRef = useRef(null);

  const settings = {
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    swipe: true,
    touchMove: true,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1033,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 823,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div className="card-category">
      <h2 className="card-categoryHeader">{cardCategoryText}</h2>

      <div className="custom-slider-wrapper">
        <Slider ref={sliderRef} {...settings} className="custom-slider">
          {cardCategoryData.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              price={card.price}
              categories={card.categories}
              image={card.img}
            />
          ))}{" "}
        </Slider>
      </div>

      <button onClick={prevSlide} className="prev">
        <GrFormPreviousLink className="icons" />
      </button>
      <button onClick={nextSlide} className="next">
        <GrFormNextLink className="icons" />
      </button>
    </div>
  );
}

export default CardCategory;

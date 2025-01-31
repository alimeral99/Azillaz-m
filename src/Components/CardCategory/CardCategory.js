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
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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

import React from "react";
import "./CardList.css";
import cardData from "./cardData";
import Card from "./Card/Card";

function CardList() {
  return (
    <div className="cardlist">
      <div className="cardlist-header">
        <h3 className="fw-bold">Öne çıkanlar</h3>
        <button>Vitrin İlanları</button>
      </div>
      <div className="d-flex justify-content-center flex-wrap cardList-container">
        {cardData.map((card) => (
          <Card
            title={card.title}
            price={card.price}
            categories={card.categories}
            city={card.city}
            acilIlan={card.acilIlan}
            yeniIlan={card.yeniIlan}
            jetIlan={card.jetIlan}
            image={card.img}
          />
        ))}
      </div>
    </div>
  );
}

export default CardList;

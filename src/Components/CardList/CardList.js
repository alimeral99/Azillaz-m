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
      <div className="d-flex flex-wrap ">
        {cardData.map((card) => (
          <div className="g-1">
            <Card
              key={card.id}
              title={card.title}
              price={card.price}
              categories={card.categories}
              city={card.city}
              acilIlan={card.acilIlan}
              yeniIlan={card.yeniIlan}
              image={card.img}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;

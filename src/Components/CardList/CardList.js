import React from "react";
import "./CardList.css";
import cardData from "./cardData";
import Card from "./Card/Card";

function CardList() {
  return (
    <div className="">
      <h3 className="fw-bold">Recommendations for you</h3>
      <div className="d-flex flex-wrap ">
        {cardData.map((card) => (
          <div className="g-1">
            <Card
              key={card.id}
              title={card.title}
              price={card.price}
              categories={card.categories}
              image={card.img}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;

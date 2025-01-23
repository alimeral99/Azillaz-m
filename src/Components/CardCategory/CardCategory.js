import React from "react";
import "./CardCategory.css";
import Card from "../CardList/Card/Card";

function CardCategory({ cardCategoryData, cardCategoryText }) {
  return (
    <div className="card-category">
      <h2 className="card-categoryHeader">{cardCategoryText}</h2>
      <div className="d-flex flex-wrap ">
        {cardCategoryData.map((card) => (
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

export default CardCategory;

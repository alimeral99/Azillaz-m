import React from "react";
import Card from "../../../Components/CardList/Card/Card";
import "./CategoryContentItems.css";

function CategoryContentItems({ cardItems }) {
  return (
    <div className="category-contentItems">
      {cardItems.map((card, index) => (
        <Card
          key={index}
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
  );
}

export default CategoryContentItems;

import React, { useState, useEffect } from "react";
import "./CardList.css";
import cardData from "./cardData";
import Card from "./Card/Card";

function CardList() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 880);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 880);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderItems = () => {
    const items = [];
    let adCount = 0;

    cardData.forEach((card, index) => {
      items.push(
        <Card
          key={`card-${index}`}
          title={card.title}
          price={card.price}
          categories={card.categories}
          city={card.city}
          acilIlan={card.acilIlan}
          yeniIlan={card.yeniIlan}
          jetIlan={card.jetIlan}
          image={card.img}
        />
      );

      // İlk iki 6'lı gruptan sonra reklam ekle
      if (
        isMobile &&
        (index + 1) % 6 === 0 &&
        adCount < 2 &&
        index !== cardData.length - 1
      ) {
        const adType = adCount === 0 ? "ads" : "ilanver";
        items.push(<Card key={`ad-${index}`} isAd={adType} />);
        adCount++;
      }
    });

    return items;
  };

  return (
    <div className="cardlist">
      <div className="cardlist-header">
        <h3 className="fw-bold">Öne çıkanlar</h3>
        <button>Vitrin İlanları</button>
      </div>
      <div className="cardList-container">{renderItems()}</div>
    </div>
  );
}

export default CardList;

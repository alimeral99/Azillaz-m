import React from "react";
import { useState } from "react";
import "./Card.css";
import { FaRegHeart } from "react-icons/fa";

function Card({
  title,
  price,
  image,
  categories,
  city,
  acilIlan,
  yeniIlan,
  jetIlan,
}) {
  const [isFilled, setIsFilled] = useState(false);

  return (
    <div className="card m-2" style={{ width: "12rem" }}>
      <img src={image} className="card-img-top card-img" alt="..." />
      <img
        className="cardProfile-img"
        src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
        alt=""
      />
      {acilIlan && <span className="apacilIlan-box">Apacil İlan</span>}
      {yeniIlan && <span className="yeniIlan-box">yeni İlan</span>}
      {jetIlan && <span className="jetIlan-box">jet İlan</span>}

      <div className="card-body">
        <h6 className="text-muted text-capitalize ">{categories}</h6>
        <h5 className="card-title text-capitalize ">{title}</h5>

        <h6 className="card-text text-muted ">{city}</h6>
      </div>
      <div className="card-buttonGroup">
        <button className="card-btn fw-bold">{price} ₺</button>{" "}
        <button onClick={() => setIsFilled(!isFilled)} className="icon-btn">
          <svg
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill={isFilled ? "#FFA500" : "none"}
            stroke={isFilled ? "#FFA500" : "black"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 21l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6 3.5 4 6 4c1.54 0 3.04.99 3.58 2.36h.84C14.96 4.99 16.46 4 18 4c2.5 0 4 2 4 4.5 0 3.78-3.4 6.86-8.55 11.18L12 21z" />
          </svg>
        </button>{" "}
      </div>
    </div>
  );
}

export default Card;

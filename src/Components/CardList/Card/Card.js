import React from "react";
import "./Card.css";
import { FaRegHeart } from "react-icons/fa";

function Card({ title, price, image, categories, city, acilIlan, yeniIlan }) {
  return (
    <div className="card m-2" style={{ width: "12rem" }}>
      <img src={image} className="card-img-top" alt="..." />
      <img
        className="cardProfile-img"
        src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
        alt=""
      />
      {acilIlan && <span className="apacilIlan-box">Apacil İlan</span>}
      {yeniIlan && <span className="yeniIlan-box">yeni İlan</span>}

      <div className="card-body">
        <h6 className="text-muted ">{categories}</h6>
        <h5 className="card-title">{title}</h5>

        <small className="card-text text-muted fw-sm">{city}</small>
      </div>

      <div className="card-buttonGroup">
        <button className="card-btn fw-bold">{price}</button>{" "}
        <FaRegHeart className="favoriteIcon" />
      </div>
    </div>
  );
}

export default Card;

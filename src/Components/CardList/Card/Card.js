import React from "react";
import "./Card.css";

function Card({ title, price, image, categories }) {
  return (
    <div className="card m-2" style={{ width: "12rem" }}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h6 className="text-muted ">{categories}</h6>
        <h5 className="card-title">{title}</h5>
      </div>
      <button className="card-btn fw-bold">{price}</button>{" "}
    </div>
  );
}

export default Card;

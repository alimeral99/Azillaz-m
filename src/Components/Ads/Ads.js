import React from "react";
import adsImg from "./ads-img.jpeg";
import "./Ads.css";

function Ads({ img }) {
  return (
    <div className="ads">
      <img src={adsImg} alt="ads-img" />
    </div>
  );
}

export default Ads;

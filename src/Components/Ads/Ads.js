import React from "react";
import adsImg from "./ads-img.jpeg";
import ilanverImg from "./ilanver.jpeg";
import "./Ads.css";

function Ads() {
  return (
    <div className="ads">
      <img src={adsImg} alt="ads-img" />
      <img src={ilanverImg}></img>
    </div>
  );
}

export default Ads;

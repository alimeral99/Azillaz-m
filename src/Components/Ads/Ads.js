import React from "react";
import "./Ads.css";

function Ads({ img }) {
  return (
    <div className="ads">
      <img src={img} alt="ads-img" />
    </div>
  );
}

export default Ads;

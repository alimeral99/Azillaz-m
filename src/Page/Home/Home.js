import React from "react";
import "./Home.css";
import Sidebar from "../../Sidebar/Sidebar";
import Category from "../../Components/Category/Category";
import BannerAds from "../../Components/BannerAds/BannerAds";
import CardList from "../../Components/CardList/CardList";
import cardData from "../../data/cardData";
import Ads from "../../Components/Ads/Ads";
import PopularLocation from "../../Components/PopularLocations/PopularLocation";
import CardCategory from "../../Components/CardCategory/CardCategory";
import HeroSection from "../../Components/HeroSection/HeroSection";
function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <div className="home-body">
          <div className="home-body">
            <div className="home-left">
              <Sidebar />
              <Ads />
            </div>

            <div className="home-right">
              <Category />
              <BannerAds />
              <CardList />
            </div>
          </div>
        </div>
        <CardCategory
          cardCategoryText={"Çevrenizdekiler"}
          cardCategoryData={cardData}
        />
        <PopularLocation />
        <CardCategory
          cardCategoryText={"Popüler Hizmetler"}
          cardCategoryData={cardData}
        />
        <HeroSection />
      </div>
    </div>
  );
}

export default Home;

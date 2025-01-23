import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Navbar from "./navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";
import Category from "./Components/Category/Category";
import BannerAds from "./Components/BannerAds/BannerAds";
import CardList from "./Components/CardList/CardList";
import Ads from "./Components/Ads/Ads";
import cardData from "./data/cardData";
import PopularLocation from "./Components/PopularLocations/PopularLocation";
import CardCategory from "./Components/CardCategory/CardCategory";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app-body">
        <div className="app-bodyContainer">
          <div className="app-bodyLeft">
            <Sidebar />
            <Ads
              img={
                "https://classiads.designinvento.net/elementor/classiads-flow/wp-content/uploads/2023/05/BANxER-11.jpg"
              }
            />
            <Ads
              img={
                "https://classiads.designinvento.net/elementor/classiads-flow/wp-content/uploads/2023/05/04-1.jpg"
              }
            />
          </div>

          <div className="app-bodyRight">
            <Category />
            <BannerAds />
            <CardList />
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
      </div>
    </div>
  );
}

export default App;

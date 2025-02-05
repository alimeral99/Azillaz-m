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
import AcilLinks from "./Components/AcilLinks/AcilLinks";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="app-body">
        <div className="app-bodyContainer">
          <div className="app-bodyLeft">
            <Sidebar />
            <Ads />
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
      <AcilLinks />
      <Footer />
    </div>
  );
}

export default App;

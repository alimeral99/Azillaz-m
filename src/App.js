import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import Navbar from "./navbar/Navbar";
import Home from "./Page/Home/Home";
import CategoryContent from "./Page/CategoryContent/CategoryContent";
import Footer from "./Components/Footer/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/categorycontent/:category"
            element={<CategoryContent />}
          />
        </Routes>
        <Footer />{" "}
      </Router>
    </div>
  );
}

export default App;

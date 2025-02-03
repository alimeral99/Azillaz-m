import React, { useState } from "react";
import logo from "./navbar-logo.png";
import LocationModal from "./LocationModal/LocationModal";
import { IoSearch } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";
import { IoMdPerson } from "react-icons/io";
import { FaComment } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";

import "./Navbar.css";

function Navbar() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logoContainer">
        <img src={logo} className="navbar-logo" alt="My Image" />
      </div>

      <LocationModal showModal={showModal} closeModal={closeModal} />

      <form>
        <div className="search-box">
          <input type="text" />
          <div className="navbar-iconContainer">
            <IoSearch className="search-box-icon" />
          </div>
        </div>

        <GrLocation className="navbar-location-icon" onClick={openModal} />
      </form>

      <div className="navbar-right">
        {/* <div className="navbar-right-icons">
          <IoMdPerson />
          <FaComment />
          <FaHeart />
          <IoIosNotifications />
        </div>

        <button>acil ilan ver</button> */}
        <div className="navbar-rightLinks">
          <a href="#">Giriş Yap</a>
          <span>|</span>
          <a href="#">Hesap aç</a>
        </div>
        <button> + İlan ver</button>
      </div>
    </nav>
  );
}

export default Navbar;

import React, { useState } from "react";
import logo from "./navbar-logo.png";
import LocationModal from "./LocationModal/LocationModal";
import { IoSearch } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";
import { IoMdPerson } from "react-icons/io";
import { FaComment } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

import "./Navbar.css";

function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logoContainer">
        <img src={logo} className="navbar-logo" alt="My Image" />
      </div>

      <button className="mobile-menu-button" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <IoClose /> : <RiMenu3Line />}
      </button>

      <LocationModal showModal={showModal} closeModal={closeModal} />

      <div
        className={`navbar-content ${
          isMobileMenuOpen ? "mobile-menu-open" : ""
        }`}
      >
        <form>
          <div className="search-box">
            <input type="text" placeholder="Ne aramıştınız?" />
            <div className="navbar-iconContainer">
              <IoSearch className="search-box-icon" />
            </div>
          </div>

          <GrLocation className="navbar-location-icon" onClick={openModal} />
        </form>

        <div className="navbar-right">
          <div className="navbar-rightLinks">
            <a href="#">Giriş Yap</a>
            <span>|</span>
            <a href="#">Hesap aç</a>
          </div>
          <button className="post-ad-button"> + İlan ver</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

import React, { useState } from "react";
import LocationModal from "./LocationModal/LocationModal";
import { IoSearch } from "react-icons/io5";
import { GrLocation } from "react-icons/gr";

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
      <h1>Logo</h1>

      <div className="search-container">
        <input type="text" />
        <button type="button">
          <IoSearch className="icons" />
        </button>
      </div>

      <div className="modal-container" onClick={openModal}>
        <GrLocation className="icons" />
      </div>

      <LocationModal showModal={showModal} closeModal={closeModal} />

      <div className="navbar-right">
        <button className="register-loginBtn">Giriş ve Kayıt OL</button>
        <button> + İlan ver</button>
      </div>
    </nav>
  );
}

export default Navbar;

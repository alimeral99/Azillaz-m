import React, { useState } from "react";
import "./LocationModal.css";

function LocationModal({ showModal, closeModal }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="location-modal">
      <div className={`modal ${showModal ? "show" : ""}`}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Konum Seçin</h5>
            <button type="button" className="close" onClick={closeModal}>
              ×
            </button>
          </div>
          <div className="locationmodal-body">
            <h1>Bir il seçin</h1>
            <select id="options" value={selectedOption} onChange={handleChange}>
              <option value="" disabled hidden>
                Seçiniz
              </option>
              <option value="istanbul">İstanbul</option>
              <option value="ankara">Ankara</option>
              <option value="izmir">İzmir</option>
              <option value="bursa">Bursa</option>
            </select>

            <p>Seçilen Seçenek: {selectedOption}</p>
          </div>

          <div className="locationmodal-body">
            <h1>Bir ilçe seçin</h1>
            <select id="options" value={selectedOption} onChange={handleChange}>
              <option value="" disabled hidden>
                test
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocationModal;

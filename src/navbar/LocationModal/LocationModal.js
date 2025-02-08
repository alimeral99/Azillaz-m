import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form } from "react-bootstrap";
import "./LocationModal.css";

const cityData = {
  Türkiye: ["İstanbul", "Ankara", "İzmir"],
  Almanya: ["Berlin", "Münih", "Hamburg"],
  Fransa: ["Paris", "Lyon", "Marsilya"],
};

function LocationModal({ showModal, closeModal }) {
  const [selectedCountry, setSelectedCountry] = useState("Türkiye");
  const [selectedCity, setSelectedCity] = useState("");

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
    setSelectedCity("");
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  return (
    <div className="d-flex justify-content-center align-items-center ">
      <Modal
        style={{ marginTop: "-90px" }}
        backdropClassName="custom-backdrop"
        show={showModal}
        onHide={closeModal}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Konum Seçin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>İl Seçin</Form.Label>
              <Form.Select
                value={selectedCountry}
                onChange={handleCountryChange}
              >
                {Object.keys(cityData).map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group>
              <Form.Label>İlçe Seçin</Form.Label>
              <Form.Select value={selectedCity} onChange={handleCityChange}>
                <option value="">İlçe Seçiniz</option>
                {cityData[selectedCountry].map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Kapat
          </Button>
          <Button variant="primary" onClick={closeModal}>
            Kaydet
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default LocationModal;

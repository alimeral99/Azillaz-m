import React from "react";
import "./HeroSection.css";
import { Link, useNavigate } from "react-router-dom";

function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-left">
          <h1>
            Hemen İlan Ver,
            <br />
            Hızlıca Sat!
          </h1>
          <p>
            Milyonlarca aktif kullanıcıya ulaşın, ürünlerinizi hızlıca satın.
          </p>
          <div className="hero-buttons">
            <button
              className="primary-button"
              onClick={() => navigate("/ilan-form")}
            >
              <i className="fas fa-plus"></i> Ücretsiz İlan Ver
            </button>
            <button className="secondary-button">
              <i className="fas fa-search"></i> İlanları Keşfet
            </button>
          </div>
        </div>

        <div className="hero-right">
          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-bolt"></i>
            </div>
            <div className="feature-text">
              <h4>Hızlı İlan Verme</h4>
              <p>30 saniyede ilanınızı yayınlayın</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-users"></i>
            </div>
            <div className="feature-text">
              <h4>Geniş Kitle</h4>
              <p>Milyonlarca aktif kullanıcıya ulaşın</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <div className="feature-text">
              <h4>Güvenli Alışveriş</h4>
              <p>%100 Alıcı ve satıcı koruması</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

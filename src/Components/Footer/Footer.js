import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import appStore from "../../images/app-store2.png";
import googlePlay from "../../images/google-play2.png";

function Footer() {
  useEffect(() => {
    // Footer bölümleri için giriş animasyonu
    const footerSections = document.querySelectorAll(".footer-section");
    footerSections.forEach((section, index) => {
      section.style.opacity = "0";
      section.style.transform = "translateY(20px)";
      setTimeout(() => {
        section.style.transition = "all 0.5s ease";
        section.style.opacity = "1";
        section.style.transform = "translateY(0)";
      }, 200 * index);
    });

    // Sosyal medya ikonları için hover efekti
    const socialLinks = document.querySelectorAll(".social-links a");
    socialLinks.forEach((link) => {
      link.addEventListener("mouseenter", (e) => {
        e.target.style.transform = "translateY(-5px) rotate(360deg)";
        e.target.style.transition = "all 0.3s ease";
      });
      link.addEventListener("mouseleave", (e) => {
        e.target.style.transform = "translateY(0) rotate(0)";
      });
    });
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-sections">
          <div className="footer-section">
            <h3>
              <i className="fas fa-building"></i> Kurumsal
            </h3>
            <ul>
              <li>
                <Link to="#">
                  <i className="fas fa-info-circle"></i> Hakkımızda
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fas fa-leaf"></i> Sürdürülebilirlik
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fas fa-newspaper"></i> Haberler
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fas fa-sitemap"></i> Site Haritası
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fas fa-envelope"></i> İletişim
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>
              <i className="fas fa-cogs"></i> Hizmetlerimiz
            </h3>
            <ul>
              <li>
                <Link to="#">
                  <i className="fas fa-upload"></i> Toplu Ürün Girişi
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fas fa-ad"></i> Reklam
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fas fa-mobile-alt"></i> Mobil
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>
              <i className="fas fa-user-shield"></i> Gizlilik ve Kullanım
            </h3>
            <ul>
              <li>
                <Link to="#">
                  <i className="fas fa-shield-alt"></i> Güvenli Alışverişin
                  İpuçları
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fas fa-file-contract"></i> Sözleşmeler ve
                  Kurallar
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fas fa-file-signature"></i> Hesap Sözleşmesi
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fas fa-file-alt"></i> Kullanım Koşulları
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fas fa-user-lock"></i> Kişisel Verilerin
                  Korunması
                </Link>
              </li>
              <li>
                <Link to="#">
                  <i className="fas fa-question-circle"></i> Yardım ve İşlem
                  Rehberi
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>
              <i className="fas fa-hashtag"></i> Bizi Takip Edin
            </h3>
            <div className="social-links">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="X">
                <i className="fab fa-x"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
            <div className="mobile-apps">
              <a href="#" className="app-store">
                <img src={appStore} alt="App Store" />
              </a>
              <a href="#" className="google-play">
                <img src={googlePlay} alt="Google Play" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-info">
          <p>Copyright 2000-2025 acillazım.com</p>
        </div>
        <div className="footer-disclaimer">
          <p>
            acillazım.com'da yer alan kullanıcıların oluşturduğu tüm içerik,
            görüş ve bilgilerin doğruluğu, eksiksiz ve değişmez olduğu,
            yayınlanması ile ilgili yasal yükümlülükler içeriği oluşturan
            kullanıcıya aittir. Bu içeriğin, görüş ve bilgilerin yanlışlık,
            eksiklik veya yasalara aykırılığından acilazim.com hiçbir şekilde
            sorumlu değildir. Sorularınız için ilan sahibi ile irtibata
            geçebilirsiniz.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

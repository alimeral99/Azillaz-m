import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaWikipediaW } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-topLeft">
            <h2>Classiads</h2>
            <p>
              The ClassiAds is all time #1 Premium Classified Ads WordPress
              Theme on Themeforest.
            </p>
          </div>
          <div className="footer-topRight">
            <h4>Subscribe to our newsletter!</h4>
            <div className="input-box">
              <input placeholder="enter email adress" type="text" />
              <button className="footer-btn">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="footer-body">
          <table className="footer-tableLeft ">
            <thead>
              <tr>
                <th>Get Our App</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Download The App And Go To Travel The World!</td>
              </tr>
              <tr>
                <td>
                  <button className="footer-buttonGroup">apple store</button>
                  <button className="footer-buttonGroup">google play</button>
                </td>
              </tr>

              <tr>
                <td>
                  <button className="footer-btn">00 888 123 4444</button>
                </td>
              </tr>
            </tbody>
          </table>
          <table class="footer-tableRight ">
            <thead>
              <tr>
                <th>Explore</th>
                <th>Top Categories</th>
                <th>Top Locations</th>
                <th>Important Links</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>My Dashboard</td>
                <td>Real Estate</td>
                <td>United States</td>
                <td>Help Desk</td>
              </tr>
              <tr>
                <td>submit listing</td>
                <td>mobile phones</td>
                <td>canada</td>
                <td>about</td>
              </tr>

              <tr>
                <td>login</td>
                <td>electronics</td>
                <td>pakistan</td>
                <td>Refund and Returns Policy</td>
              </tr>
              {/* <tr>
                <td></td>
                <td>Terms of Services</td>
                <td>Register</td>
                <td>Vehicles</td>
                <td>India</td>
              </tr> */}
              {/* <tr>
                <td></td>
                <td>Our news</td>
                <td>Pets</td>
                <td>United Kingdom</td>
                <td>Site map</td>
              </tr> */}
              {/* <tr>
                <td></td>
                <td>Contack us</td>
                <td>Animal</td>
                <td>Australia</td>
                <td>Posting policy</td>
              </tr> */}
            </tbody>
          </table>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottomLeft">
            <p>
              © 2014 – 2024 • Classiads All Rights Reserved • Developed by
              DesignInvento
            </p>
          </div>
          <div className="footer-icons">
            <FaFacebook />
            <FaTwitter />
            <FaWikipediaW />
            <FaGithub />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import React from "react";
import "./AcilLinks.css";
import { FaExclamation } from "react-icons/fa6";
import { LiaHandPointer } from "react-icons/lia";
import { FaPeopleArrows } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";

function AcilLinks() {
  return (
    <div className="acil-links">
      <div className="acil-linksContainer">
        <div className="links-groupContainer">
          <div className="links-group">
            <div className="icon-container">
              <FaExclamation />
            </div>
            <p>Acillazımsa</p>
          </div>
        </div>

        <div className="links-groupContainer">
          <div className="links-group">
            <div className="icon-container">
              <LiaHandPointer />
            </div>
            <p>Gir ilana</p>
          </div>
        </div>
        <div className="links-groupContainer">
          <div className="links-group">
            <div className="icon-container">
              <FaPeopleArrows />
            </div>
            <p>görüş satıcıyla</p>
          </div>
        </div>

        <div className="links-groupContainer">
          <div className="links-group">
            <div className="icon-container">
              <FaHandshake />
            </div>
            <p>hallet işini</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcilLinks;

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
        <div className="links-group">
          <FaExclamation />
          <p>Acillazımsa</p>
        </div>
        <div className="links-group">
          <LiaHandPointer />
          <p>Gir ilana</p>
        </div>
        <div className="links-group">
          <FaPeopleArrows />
          <p>görüş satıcıyla</p>
        </div>
        <div className="links-group">
          <FaHandshake />
          <p>hallet işini</p>
        </div>
      </div>
    </div>
  );
}

export default AcilLinks;

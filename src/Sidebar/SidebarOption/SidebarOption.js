import React, { useState } from "react";
import "./SidebarOption.css";

function SidebarOption({ icon, category, bgColor }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sidebar-options d-flex align-items-center p-2  border-bottom-0">
      <div className="sidebar-option d-flex align-items-center position-realtive">
        <i
          className="icon d-flex align-items-center justify-content-center rounded-circle text-white"
          style={{ backgroundColor: bgColor }}
        >
          {icon}
        </i>
        <p className="category-text fw-bold ms-2 mt-3 text-capitalize">
          {category}
        </p>
      </div>
    </div>
  );
}

export default SidebarOption;

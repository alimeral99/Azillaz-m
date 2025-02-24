import React from "react";
import "./SidebarOption.css";
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa6";
import * as IoIcons from "react-icons/io5";
import * as GiIcons from "react-icons/gi";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";
import * as LuIcons from "react-icons/lu";
import * as BiIcons from "react-icons/bi";
import * as RxIcons from "react-icons/rx";

const allIcons = {
  ...Icons,
  ...IoIcons,
  ...GiIcons,
  ...BsIcons,
  ...MdIcons,
  ...LuIcons,
  ...BiIcons,
  ...RxIcons,
};

function SidebarOption({ icon, category, bgColor }) {
  const IconComponent = allIcons[icon] || allIcons["FaQuestionCircle"]; // İkonu gerçek bileşene çevir

  return (
    <div className="sidebar-options d-flex align-items-center p-2 border-bottom-0">
      <div className="sidebar-option d-flex align-items-center position-relative">
        {/* Sidebar içinde ikon burada gösterilecek */}
        <i
          className="icon d-flex align-items-center justify-content-center text-white"
          style={{ backgroundColor: bgColor }}
        >
          <IconComponent size={20} color="white" />
        </i>
        <p className="category-text fw-bold ms-2 mt-3 text-capitalize">
          <Link
            to={`/categorycontent/${category}`}
            state={{ icon }}
            style={{ textDecoration: "none", color: "gray" }}
          >
            {category}
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SidebarOption;

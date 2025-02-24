import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption/SidebarOption";

function Sidebar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 880);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isMobile && (
        <div className="hamburger-menu" onClick={toggleSidebar}>
          <div className={`hamburger ${isOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}
      <div
        className={`sidebar ${isMobile ? "mobile" : ""} ${
          isOpen ? "open" : ""
        }`}
      >
        <SidebarOption
          icon="FaHandshakeSimple"
          bgColor={"#7BAB47"}
          category={"hizmet"}
        />
        <SidebarOption
          icon="IoHomeOutline"
          bgColor={"#47C1C3"}
          category={"emlak"}
        />
        <SidebarOption icon="FaCar" bgColor={"#D5658D"} category={"vasıta"} />
        <SidebarOption
          icon="IoSettingsOutline"
          bgColor={"#B89579"}
          category={"sanayi ve iş makinaları"}
        />
        <SidebarOption
          icon="GiClawHammer"
          bgColor={"#F4721E"}
          category={"yedek parça"}
        />
        <SidebarOption
          icon="BsTools"
          bgColor={"#5B9CD6"}
          category={"araç ve aksesuarlar"}
        />
        <SidebarOption
          icon="MdOutlineComputer"
          bgColor={"#53B9C5"}
          category={"elektrik elektronik"}
        />
        <SidebarOption
          icon="LuLockKeyhole"
          bgColor={"#E96969"}
          category={"giyim moda"}
        />
        <SidebarOption
          icon="BiSolidHomeHeart"
          bgColor={"#9FBC2E"}
          category={"ev yaşam"}
        />
        <SidebarOption
          icon="RxCube"
          bgColor={"purple"}
          category={"2.el diğer"}
        />
        <SidebarOption
          icon="IoSwapHorizontal"
          bgColor={"pink"}
          category={"takas"}
        />
      </div>
    </>
  );
}

export default Sidebar;

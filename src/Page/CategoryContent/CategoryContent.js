import React, { useState, useEffect } from "react";
import "./CategoryContent.css";
import CategoryContentList from "./CategoryContentLinks/CategoryContentLinks";
import CategoryContentItems from "./CategoryContentItems/CategoryContentItems";
import Ads from "../../Components/Ads/Ads";
import { useParams, useLocation } from "react-router-dom";
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

function CategoryContent() {
  const [categoryContentItems, setCategoryContentItems] = useState([]);
  const { category } = useParams();
  const location = useLocation();

  const IconComponent =
    allIcons[location.state?.icon] || allIcons["FaQuestionCircle"];

  const categoryName =
    location.state?.category || category || "Kategori Bulunamadı";

  useEffect(() => {
    fetch(`http://localhost:3001/cardList?name=${category}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setCategoryContentItems(data[0].links);
        } else {
          setCategoryContentItems([]);
        }
      })
      .catch((error) => console.error("Veri çekme hatası:", error));
  }, [category]);

  return (
    <div className="category-content">
      <CategoryContentList
        categoryName={categoryName}
        IconComponent={IconComponent}
      />
      <div className="category-content-body">
        <Ads />
        <CategoryContentItems cardItems={categoryContentItems} />
      </div>
    </div>
  );
}

export default CategoryContent;

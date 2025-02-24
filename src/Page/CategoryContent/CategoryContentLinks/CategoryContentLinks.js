import React, { useState, useEffect } from "react";
import "./CategoryContentLinks.css";

export default function CategoryContentLinks({ categoryName, IconComponent }) {
  const [links, setLinks] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/categories?name=${categoryName}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setLinks(data[0].links);
        } else {
          setLinks([]);
        }
      })
      .catch(() => {
        setLinks([]);
      });
  }, [categoryName]);

  return (
    <div className="categoryContentLinks">
      <div className="categoryContentLinks-header">
        <h2>
          <IconComponent size={20} /> {categoryName}
        </h2>
      </div>

      <div className="categoryContentLinks-body">
        {links === null ? (
          <p>Yükleniyor...</p>
        ) : links.length > 0 ? (
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>Bu kategori için ilgili link bulunamadı.</p>
        )}
      </div>
    </div>
  );
}

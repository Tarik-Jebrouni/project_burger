// src/pages/Menu.jsx

import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { fetchMenuItems } from "../services/api";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const getMenu = async () => {
      const items = await fetchMenuItems();
      setMenuItems(items);
    };

    getMenu();
  }, []);

  return (
    <div className="menu-page">
      <h2>Our Menu</h2>
      <div className="menu-items">
        {menuItems.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;

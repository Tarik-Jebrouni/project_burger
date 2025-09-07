import React from "react";
import burger from "../assets/burgerorder.png";
import pizzaImage from "../assets/pizza_barbani.png";
import pizzaImage2 from "../assets/pizza_margharita.png";
import { useState } from "react";
import "../styles/HomePage.css";

const products = [
  {
    id: 1,
    name: "بيتزا مارغريتا",
    description:
      "بيتزا مارغريتا هي الوصفة الأصلية للبيتزا. يتم إعدادها من خلال إضافة صلصة الطماطم.",
    price: 40.0,
    rating: 4.4,
    img: pizzaImage,
  },
  {
    id: 2,
    name: "بيتزا الياباوني",
    description:
      "بيتزا الياباوني هي البيتزا رقم واحد من حيث الشهرة وكرة الطلب حول تعلمتنك.",
    price: 50.0,
    rating: 4.8,
    img: pizzaImage2,
  },
];

const HomePage = () => {
  const [isDayMode, setIsDayMode] = useState(false);

  const handleToggle = () => {
    setIsDayMode(!isDayMode);
  };
  return (
    <div className="Home">
      <div className="navbar">
        <div className={`app ${isDayMode ? "day" : "night"}`}>
          <i className="fas fa-cart-plus flex-item-right"></i>
          <div className="toggle-container">
            <span>{isDayMode ? "🌞" : "🌙"}</span>
            <button onClick={handleToggle} className="toggle-button">
              <div className={`toggle-switch ${isDayMode ? "day" : "night"}`} />
            </button>
          </div>
        </div>
        <header className="header">
          <div className="welcome">
            <span>👋مرحباً بك</span>
            <p className="hidemargin"> طارق جبروني</p>
          </div>
        </header>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="بحث..." />
      </div>
      <main className="main-content">
        <div className="promotion-banner">
          <img src={burger} alt="Burger Promo" className="promo-img" />
        </div>
        <div className="menu-buttons">
          <button>
            <span role="img" aria-label="sandwich">
              🌭
            </span>{" "}
            سندويش
          </button>
          <button>
            <span role="img" aria-label="burger">
              🍔
            </span>{" "}
            برجر
          </button>
          <button>
            <span role="img" aria-label="pizza">
              🍕
            </span>{" "}
            بيتزا
          </button>
          <button style={{ backgroundColor: "#cdff06" }}>
            <span role="img" aria-label="all">
              🍽️
            </span>{" "}
            الكل
          </button>
        </div>
        <div className="product-list">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.img}
                alt={product.name}
                className="product-img"
              />
              <div className="product-name">
                <h3>{product.name}</h3>
                <span className="rating">⭐ {product.rating}</span>
              </div>
              <p>{product.description}</p>
              <div className="product-footer">
                <button className="add-to-cart">
                  <i className="fas fa-cart-shopping"></i>
                </button>
                <span className="price">{product.price} درهم</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer">
        <div className="icons flex-container">
          <i className="fas fa-cart-plus flex-item-right"></i>
          <i className="fas fa-home flex-item-center"></i>
          <i className="fas fa-user flex-item-left"></i>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;

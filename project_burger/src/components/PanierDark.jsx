import React, { useState } from "react";
import pizzaImage from "../assets/pizza_barbani.png";
import pizzaImage2 from "../assets/pizza_margharita.png";
import arrow from "../assets/arrow.jpg";
import "../styles/PanierDark.css";

const CartPage = () => {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "بيزا الياباوني",
      price: 50.0,
      quantity: 1,
      rating: 4.8,
      img: pizzaImage,
    },
    {
      id: 2,
      name: "بيزا مارغريتا",
      price: 40.0,
      quantity: 2,
      rating: 4.4,
      img: pizzaImage2,
    },
  ]);

  const handleIncrement = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-page">
      <div className="button-shopping">
        <button
          className="shopping-cart-btn"
          onClick={() => console.log("Navigating to shopping cart...")}
        >
          <span>عربة التسوق</span>
          <img
            src={arrow} // You can replace this with the arrow icon
            alt={arrow}
            className="arrow-icon"
          />
        </button>
      </div>
      <div className="cart-items">
        {cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="item-info">
              <img src={item.img} alt={item.name} className="item-image" />
              <div className="item-details">
                <h4>{item.name}</h4>
                <div className="item-rating">Rating: {item.rating} ★</div>
              </div>
            </div>
            <div className="item-quantity">
              <button onClick={() => handleDecrement(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleIncrement(item.id)}>+</button>
            </div>
            <div className="item-price">{item.price * item.quantity} د.م</div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <div className="total">
          <span>الإجمالي</span>
          <span>{calculateTotal()} د.م</span>
        </div>
        <div className="tax">
          <span>ضريبة</span>
          <span>8 د.م</span>
        </div>
        <div className="delivery">
          <span>توصيل</span>
          <span>10 د.م</span>
        </div>
        <div className="total-price">
          <span>الإجمالي الكلي</span>
          <span>{calculateTotal() + 8 + 10} د.م</span>
        </div>
      </div>
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

export default CartPage;

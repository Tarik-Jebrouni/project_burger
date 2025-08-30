// Banner.jsx
import React from "react";
import burgerImage from "../assets/burgerorder.png";

const Banner = () => {
  return (
    <div className="banner">
      <img src={burgerImage} alt="burger" />
      <div className="promo-text">
        <h1>برجر</h1>
        <p>اطلب الآن</p>
        <span>خصم 15%</span>
      </div>
    </div>
  );
};

export default Banner;

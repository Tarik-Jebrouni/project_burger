import React from "react";

const ProductCard = ({ name, description, price, image }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <span>{price} د.م</span>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductCard;

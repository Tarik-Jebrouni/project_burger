import React from "react";
import ProductCard from "./ProductCard";
import pizzaImage from "../assets/pizza_barbani.png";
import pizzaImage2 from "../assets/pizza_margharita.png";
import Navbar from "./Navbar"; // Or './Navbar' if it's in the same folder
import Banner from "./Banner"; // Adjust the path as necessary

const HomePage = () => {
  return (
    <div className="home">
      <Navbar />
      <Banner />
      <div className="product-list">
        <ProductCard
          name="بيزا مارغريتا"
          description="بيزا مارغريتا هي الوصفة التقليدية للبيزا"
          price="40.00"
          image={pizzaImage2}
        />
        <ProductCard
          name="بيزا باباواني"
          description="بيزا باباواني هي البيزا المميزة مع مكونات فاخرة"
          price="50.00"
          image={pizzaImage}
        />
      </div>
    </div>
  );
};

export default HomePage;

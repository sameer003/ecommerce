import React from "react";
import "./card.css";
import Button from "../../ui/button";
import CONSTANTS from "../constants";

const Card = ({ product, onAddToCart }) => {
  return (
    <div className="card">
      <img
        src={`./products/${product.product_image}.webp`}
        alt="product_image"
      />
      <div className="container">
        <h4 title={product.name}>
          <b>{product.name}</b>
        </h4>
        <div className="price-bar">
            <p>{CONSTANTS.RUPEES}{product.price}</p> <p>{CONSTANTS.RUPEES}{product.mrp}</p>
          <p>({product.discount} {CONSTANTS.OFF})</p>
        </div>
      </div>
      <Button onClick={onAddToCart}>{CONSTANTS.ADD_TO_CART}</Button>
    </div>
  );
};

export default Card;

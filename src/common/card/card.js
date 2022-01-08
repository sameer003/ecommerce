import React from "react";
import './card.css';
import Button from '../../ui/button';

const Card = ({ product }) => {

  return (
<div className="card">
  <img src={`./products/${product.product_image}.webp`} alt="product_image" />
  <div className="container">
    <h4 title={product.name}><b>{product.name}</b></h4> 
    <div className="price-bar">
    <p>Rs.{product.price}</p> <p>Rs.{product.mrp}</p><p>({product.discount} OFF)</p> 
    </div>
    
  </div>
  <Button onClick={() => console.log('clicked')}>Add to Cart</Button>
</div>
  );
};

export default Card;

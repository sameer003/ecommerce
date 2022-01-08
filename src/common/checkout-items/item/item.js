import React, {useState} from 'react';
import './item.css'

export default function Item({product}) {
  const [counter, setcounter] = useState(1)
    return (
      <div className="item-container">
        <img
          src={`./products/${product.product_image}.webp`}
          alt="product_image"
        />
        <div className="item-details">
          <h4 title={product.name}>
            <b>{product.name}</b>
          </h4>
          <div className="price-bar">
            <p>Rs.{product.price}</p> <p>Rs.{product.mrp}</p>
            <p>({product.discount} OFF)</p>
          </div>
        </div>
        <div className="quantity">
          Quantity{" "}
          <div className="icon" onClick={() => setcounter(counter - 1)}>
            -
          </div>
          <input
            value={counter}
            onChange={(e) => setcounter(e.target.value)}
            type="text"
            className="qty-input"
          />
          <div className="icon" onClick={() => setcounter(counter+1)}>+</div>
        </div>
      </div>
    );
}

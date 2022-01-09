import React from 'react';
import CONSTANTS from "../../constants";
import './item.css';

export default function Item({product, onChange, onRemove}) {
    return (
      <div className="item-container">
        <div title="Remove" className='remove-icon' onClick={onRemove}>+</div>
        <img
          src={`./products/${product.product_image}.webp`}
          alt="product_image"
        />
        <div className="item-details">
          <h4 title={product.name}>
            <b>{product.name}</b>
          </h4>
          <div className="price-bar">
            <p>{CONSTANTS.RUPEES}{product.price}</p> <p>{CONSTANTS.RUPEES}{product.mrp}</p>
            <p>({product.discount} {CONSTANTS.OFF})</p>
          </div>
        </div>
        <div className="quantity">
        {CONSTANTS.QUANTITY}{" "}
          <div className="icon" onClick={() => product.quantity > 1 && onChange(product.quantity - 1)}>
            -
          </div>
          <input
            value={product.quantity}
            maxLength={2}
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            onChange={(e) => onChange(e.target.value)}
            type="text"
            className="qty-input"
          />
          <div className="icon"  onClick={() => product.quantity+1 < 100 && onChange(product.quantity+1)}>+</div>
        </div>
      </div>
    );
}

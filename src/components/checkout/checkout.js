import React from 'react';
import './checkout.css';
import CheckoutSummary from '../../common/checkout-summary/checkout-summary';
import CheckoutItems from '../../common/checkout-items/checkout-items';
import { useSelector } from "react-redux";
import Button from '../../ui/button';
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.user.cart);
  return (
    <div className="checkout">
      {!cart.length && (
        <div className="return-home">
          <h3>Please add some item to your cart!</h3>
          <Button onClick={() => {navigate("/")}}>Return to Home</Button>
        </div>
      )}
      {cart.length > 0 && (
        <div className="checkout-items">
          <CheckoutItems />
        </div>
      )}
      {cart.length > 0 && (
        <div className="checkout-summary">
          <CheckoutSummary />
        </div>
      )}
    </div>
  );
}

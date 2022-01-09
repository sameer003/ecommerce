import React, {useEffect} from 'react';
import CheckoutSummary from '../../common/checkout-summary/checkout-summary';
import CheckoutItems from '../../common/checkout-items/checkout-items';
import { useSelector } from "react-redux";
import Button from '../../ui/button';
import { useNavigate } from "react-router-dom";
import CONSTANTS from '../../common/constants';
import './checkout.css';

export default function Checkout() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.user.cart);
  const loggedIn = useSelector((state) => state.user.loggedIn);

  // if user bis not logged in redirect to login screen
  useEffect(() => {
    if(!loggedIn){
      navigate('/login')
    }
  }, [loggedIn, navigate]);

  return (
    <div className="checkout">
      {!cart.length && (
        <div className="return-home">
          <h3>{CONSTANTS.PLEASE_ADD_ITEMS}</h3>
          <Button onClick={() => {navigate("/")}}>{CONSTANTS.RETURN_TO_HOME}</Button>
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

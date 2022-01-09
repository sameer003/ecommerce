import React from "react";
import "./header.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CONSTANTS from '../../common/constants';

export default function Header() {
  const cart = useSelector((state) => state.user.cart);
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const navigate = useNavigate();

  function handleClick() {
    if (loggedIn) {
      navigate("/checkout");
    } else {
      navigate("/login");
    }
  }

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate("/")}>
      {CONSTANTS.HOME}
      </div>

      <div className="nav-links">
        {!loggedIn && (
          <p className="nav-login" onClick={() => navigate("/login")}>
            {CONSTANTS.LOGIN}
          </p>
        )}
        {loggedIn && (
          <p className="nav-login" onClick={() => navigate("/my-account")}>
            {CONSTANTS.MY_ACCOUNT}
          </p>
        )}
        <div className="cart">
          {cart.length > 0 && <p className="counter">{cart.length}</p>}
          <img
            src="./cart_icon.png"
            alt="cart_icon"
            className="cart-icon"
            onClick={handleClick}
          />
        </div>
      </div>
    </nav>
  );
}

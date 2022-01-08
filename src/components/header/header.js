import React from "react";
import'./header.css';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const cart = useSelector((state) => state.user.cart);
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const navigate = useNavigate();

  function handleClick() {
    if(loggedIn){
      navigate("/checkout");
    } else{
      navigate("/login");
    }
    
  }

  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate("/")}>
        Home
      </div>

      <div className="nav-links">
        <p className="nav-login" onClick={()=> navigate("/login")}>Login</p>
        <div className="cart">
          {cart.length > 0 && <p className="counter">{cart.length}</p>}
          <img src="./cart_icon.png" alt="cart_icon" className="cart-icon" onClick={handleClick}/>
        </div>
        
      </div>
    </nav>
  );
}

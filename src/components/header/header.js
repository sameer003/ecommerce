import React from "react";
import'./header.css';

export default function Header() {
  return (
    <nav className="navbar">
      <div className="logo">
        Shopping Site
      </div>

      <div className="nav-links">
        <p>Login</p>
        <img src="./cart_icon.png" alt="image" className="cart-icon"/>
      </div>
    </nav>
  );
}

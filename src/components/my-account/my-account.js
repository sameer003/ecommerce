import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CONSTANTS from '../../common/constants';
import "./my-account.css";

export default function MyAccount() {
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const orders = useSelector((state) => state.user.orders);
  
  // if not logged in, redirect to login screen
  const navigate = useNavigate();
  useEffect(() => {
    if (!loggedIn) {
      navigate("/login");
    }
  }, [loggedIn,navigate]);

  return (
    <div className="my-account-container">
      {orders.length === 0 && <h4>No Orders Yet!</h4>}
      {orders.length > 0 && (
        <div className="order-list">
          <h4>{CONSTANTS.ORDERS}</h4>
          {orders.map((order) => {
            return (
              <div className="orders" key={order.order_id}>
                {CONSTANTS.ORDER}#{order.order_id}{" "}
                <span>
                {CONSTANTS.PLACED_ON} : {new Date(order.created_at).toDateString()}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

import React, { useState, useEffect } from "react";
import "./checkout-summary.css";
import Button from "../../ui/button";
import { useSelector, useDispatch } from "react-redux";
import { saveOrder } from "../../redux/reducers/user/user.actions";
import { useNavigate } from "react-router-dom";
import CONSTANTS from "../constants";

const shipping = 100;
export default function CheckoutSummary() {
  // Get all items in the cart
  const cart = useSelector((state) => state.user.cart);
  // price break-up details
  const [details, setDetails] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // calculate break-up details
  useEffect(() => {
    let totalMRP = 0;
    let totalDiscount = 0;
    let total = 0;
    cart.forEach((item) => {
      totalMRP = totalMRP + Number(item.mrp) * Number(item.quantity);
      totalDiscount =
        totalDiscount +
        (Number(item.mrp) - Number(item.price)) * Number(item.quantity);
      total = total + Number(item.price) * Number(item.quantity);
    });

    total = total > 0 ? total + shipping : total;
    setDetails({
      totalMRP,
      totalDiscount,
      total,
    });
  }, [cart]);

  // Save order and redirect to home
  const onSubmit = () => {
    if (details.total > 0) {
      dispatch(saveOrder({ cart, total: details.total }));
      navigate("/");
    }
  };

  return (
    <div className="summary-content">
      <h4>
        {CONSTANTS.PRICE_DETAILS} ({cart.length} {CONSTANTS.ITEMS})
      </h4>
      <h5>
        {CONSTANTS.TOTAL_MRP} <span>{details.totalMRP}</span>
      </h5>
      <h5>
        {CONSTANTS.DISCOUNT_ON_MRP}{" "}
        <span className="light-green">-{details.totalDiscount}</span>
      </h5>
      <h5>
        {CONSTANTS.SHIPPING} <span>{details.total > 0 ? shipping : 0}</span>
      </h5>
      <h4>
        {CONSTANTS.TOTAL_AMOUNT} <span>{details.total}</span>
      </h4>
      <Button onClick={onSubmit}>{CONSTANTS.CONFIRM_ORDER}</Button>
    </div>
  );
}

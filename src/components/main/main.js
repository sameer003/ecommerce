import React, { useEffect, useState } from "react";
import Card from "../../common/card/card";
import { useSelector, useDispatch } from "react-redux";
import "./main.css";
import { initializeProducts } from "../../redux/reducers/products/products.actions";
import { addToCart } from "../../redux/reducers/user/user.actions";
import Loader from "../../common/loader/loader";

export default function Main() {
  const products = useSelector((state) => state.products.list);
  const [showloader, setShowloader] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setShowloader(true);
    fetch("./products.json")
      .then((response) => response.json())
      .then((data) => {
        dispatch(initializeProducts(data));
        setTimeout(() => setShowloader(false), 1000);
      });
  }, [dispatch]);

  const onAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="main-container">
      {showloader && <Loader />}
      {!showloader &&
        products.map((product) => {
          return (
            <Card
              key={product.id}
              product={product}
              onAddToCart={() => onAddToCart(product)}
            />
          );
        })}
    </div>
  );
}

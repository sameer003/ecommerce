import React, { useEffect, useState } from "react";
import Card from "../../common/card/card";
import { useSelector, useDispatch } from "react-redux";
import { initializeProducts } from "../../redux/reducers/products/products.actions";
import { addToCart } from "../../redux/reducers/user/user.actions";
import Loader from "../../ui/loader/loader";
import "./main.css";

export default function Main() {
  const products = useSelector((state) => state.products.list);
  const [showloader, setShowloader] = useState(false);
  const dispatch = useDispatch();

  // fetch all products and update the store
  useEffect(() => {
    setShowloader(true);
    fetch("./products.json")
      .then((response) => response.json())
      .then((data) => {
        dispatch(initializeProducts(data));
        setTimeout(() => setShowloader(false), 1000);
      });
  }, [dispatch]);

  // add item to cart, if already added increment the quantity
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

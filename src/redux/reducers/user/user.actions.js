import { LOGIN, ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY, SAVE_ORDER } from "./user.types";

export const login = () => {
  return {
    type: LOGIN
  };
};

export const addToCart = (payload) => {
  return {
    type: ADD_TO_CART,
    payload
  };
};

export const removeFromCart = (payload) => {
  return {
    type: REMOVE_FROM_CART,
    payload
  };
};

export const updateQuantity = (payload) => {
  return {
    type: UPDATE_QUANTITY,
    payload
  };
};

export const saveOrder = (payload) => {
  return {
    type: SAVE_ORDER,
    payload
  };
};


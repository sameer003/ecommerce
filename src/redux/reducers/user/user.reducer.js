import {
  LOGIN,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_QUANTITY,
  SAVE_ORDER,
} from "./user.types";
import { addItemToCart, updateQuantity } from "./helper.util";

const INITIAL_STATE = {
  loggedIn: false,
  orders: [],
  cart: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loggedIn: true,
      };

    case ADD_TO_CART:
      return {
        ...state,
        cart: addItemToCart(state.cart, action.payload),
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case UPDATE_QUANTITY:
      return {
        ...state,
        cart: updateQuantity(state.cart, action.payload.id, action.payload.qty),
      };
    case SAVE_ORDER:
      return {
        ...state,
        cart: [],
        orders: [
          ...state.orders,
          {
            order_id: Date.now(),
            created_at: new Date(),
            total: action.payload.total,
            item: action.payload.cart,
          },
        ],
      };

    default:
      return state;
  }
};

export default reducer;

import { PRODUCT_LIST_INIT } from "./products.types";

export const initializeProducts = (payload) => {
  return {
    type: PRODUCT_LIST_INIT,
    payload
  };
};

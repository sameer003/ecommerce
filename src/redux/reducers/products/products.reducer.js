import { PRODUCT_LIST_INIT } from "./products.types";

const INITIAL_STATE = {
  list: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCT_LIST_INIT:
      return {
        list:action.payload
      };

    default:
      return state;
  }
};

export default reducer;

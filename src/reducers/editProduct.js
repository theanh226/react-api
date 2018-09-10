import * as Types from "./../constants/ActionType";

var initialState = {};

const editProduct = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_PRODUCT_TO_UPDATE:
      return action.product;
    default:
      return [...state];
  }
};

export default editProduct;

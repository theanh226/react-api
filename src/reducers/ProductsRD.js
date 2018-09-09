import * as Types from "./../constants/ActionType";

var initialState = [];

const ProductsRD = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_DATA:
      state = action.products;
      return [...state];

    default:
      return [...state];
  }
};

export default ProductsRD;

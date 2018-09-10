import * as Types from "./../constants/ActionType";

var initialState = [];
var findIndex = (products, id) => {
  var result = -1;
  products.forEach((arr, index) => {
    if (arr.id === id) {
      result = index;
    }
  });
  return result;
};

const ProductsRD = (state = initialState, action) => {
  var index = -1;
  var { id } = action;
  switch (action.type) {
    case Types.FETCH_DATA:
      state = action.products;
      return [...state];
    case Types.DELETE_PRODUCT:
      index = findIndex(state, id);
      state.splice(index, 1);
      return [...state];
    default:
      return [...state];
  }
};

export default ProductsRD;

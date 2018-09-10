import * as Types from "./../constants/ActionType";
import callApi from "./../utils/apiCaller";

export const fetchData = products => {
  return {
    type: Types.FETCH_DATA,
    products
  };
};

export const fetchProductRequest = () => {
  return dispatch => {
    callApi("products", "GET", null).then(res => {
      dispatch(fetchData(res.data));
    });
  };
};
export const deleteProduct = id => {
  return {
    type: Types.DELETE_PRODUCT,
    id
  };
};

export const deleteProductRequest = id => {
  return dispatch => {
    callApi(`products/${id}`, "DELETE", null).then(res => {
      dispatch(deleteProduct(id));
    });
  };
};

export const addProduct = newProduct => {
  return {
    type: Types.ADD_PRODUCT,
    newProduct
  };
};

export const addProductRequest = newProduct => {
  return dispatch => {
    callApi("products", "POST", newProduct).then(res => {
      dispatch(addProduct(res.data));
    });
  };
};

//get product to update

export const getProductToUpdate = product => {
  return {
    type: Types.GET_PRODUCT_TO_UPDATE,
    product
  };
};

export const getProductToUpdateRequest = id => {
  return dispatch => {
    callApi(`products/${id}`, "GET", id).then(res => {
      dispatch(getProductToUpdate(res.data));
    });
  };
};

//Update Product

export const updateProduct = product => {
  return {
    type: Types.UPDATE_PRODUCT,
    product
  };
};

export const updateProductRequest = product => {
  return dispatch => {
    callApi(`products/${product.id}`, "PUT", product).then(res => {
      dispatch(updateProduct(res.data));
    });
  };
};

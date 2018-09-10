import { combineReducers } from "redux";
import ProductsRD from "./ProductsRD";
import editProduct from "./editProduct";
const rootReducer = combineReducers({ ProductsRD, editProduct });
export default rootReducer;

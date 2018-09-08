import React, { Component } from "react";
import ProductList from "./../../components/ProductList/ProductList";
import ProductItem from "./../../components/ProductItem/ProductItem";

class ProductListPage extends Component {
  render() {
    var products = [];
    return (
      <div>
        <div className="mt-2">
          <button className="btn btn-warning text-white text-uppercase">
            add new product
          </button>
        </div>

        <div>
          <ProductList>{this.showProduct(products)}</ProductList>
        </div>
      </div>
    );
  }
  showProduct = products => {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <ProductItem key={index} product={product} index={index} />;
      });
    }
    return result;
  };
}

export default ProductListPage;

import React, { Component } from "react";
import ProductItem from "./../ProductItem/ProductItem";

class ProductList extends Component {
  render() {
    return (
      <div className="container mt-3">
        <div className="card ">
          <div className="card-header">Products</div>
          <div className="card-body">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Code Product</th>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <ProductItem />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;

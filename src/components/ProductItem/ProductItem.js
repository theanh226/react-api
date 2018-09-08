import React, { Component } from "react";

class ProductItem extends Component {
  render() {
    var { product, index } = this.props;
    var showStatus =
      product.status === true ? (
        <span className="badge badge-success mr-1">available</span>
      ) : (
        <span className="badge badge-danger">not available</span>
      );
    return (
      <tr>
        <td>{index}</td>
        <td>{product.code}</td>
        <td>{product.name}</td>
        <td>{product.description} </td>
        <td>{product.price}</td>
        <td>{showStatus}</td>
        <td>
          <button className="btn btn-success mr1">Edit</button>
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;

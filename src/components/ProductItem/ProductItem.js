import React, { Component } from "react";

class ProductItem extends Component {
  onDelete = code => {
    if (confirm("are you sure remove this product?")) {//eslint-disable-line
      this.props.onDelete(code);
    }
  };
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
        <td className="text-uppercase">{product.name}</td>
        <td className="text-uppercase">{product.description} </td>
        <td className="text-uppercase text-bold">{product.price}$</td>
        <td>{showStatus}</td>
        <td>
          <button className="btn btn-success mr-1">Edit</button>
          <button
            className="btn btn-danger"
            onClick={() => this.onDelete(product.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;

import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProductItem extends Component {
  onDelete = code => {
    if (confirm("are you sure remove this product?")) { //eslint-disable-line
     
      this.props.onDelete(code);
    }
  };
  render() {
    var { product } = this.props;
    var showStatus =
      product.status === true ? (
        <span className="badge badge-success mr-1">available</span>
      ) : (
        <span className="badge badge-danger">not available</span>
      );
    return (
      <tr>
        <td>{product.id}</td>
        <td>{product.code}</td>
        <td className="text-uppercase max-width-10">
 
          <p className="text-truncate">{product.name} </p>
        </td>
        <td className="text-uppercase max-width-10">

          <p className="text-truncate">{product.description}</p>{" "}
        </td>
        <td className="text-uppercase text-bold max-width-10">
  
          <p className="text-truncate">{product.price} $</p>  
        </td>
        <td>{showStatus}</td>
        <td>
          <Link
            to={`/product/${product.id}/edit`}
            className="btn btn-success mr-1"
          >
            Edit
          </Link>
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

import React, { Component } from "react";

class ProductItem extends Component {
  render() {
    return (
      <tr>
        <td>1</td>
        <td>abcxyz</td>
        <td>Iphone</td>
        <td>new </td>
        <td>1200</td>
        <td>
          <span className="badge badge-secondary mr-1">Secondary</span>
          <span className="badge badge-danger">Danger</span>
        </td>
        <td>
          <button className="btn btn-success mr1">Edit</button>
          <button className="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}

export default ProductItem;

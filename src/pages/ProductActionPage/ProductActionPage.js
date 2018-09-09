import React, { Component } from "react";
import callApi from "../../utils/apiCaller";
import { Link } from "react-router-dom";
import randomstring from 'randomstring';

class ProductActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      nameProduct: "",
      priceProduct: "",
      checkbox: "",
      saved: false
    };
  }

  onSubmit = e => {
    e.preventDefault();
   // var { history } = this.props;
    var { nameProduct, priceProduct, checkbox } = this.state;
    callApi("products", "POST", {
      name: nameProduct,
      code:randomstring.generate(10),
      price: priceProduct,
      status: checkbox
    }).then(res => {
      console.log(res);
      this.setState({
        saved: true
      }); //history.push("/product-list"); //use as redirect link
    });
  };

  onChange = e => {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  };

  render() {
    var Notification_added = (
      <h2 className="badge badge-pill badge-success">
        Your product has been added
      </h2>
    );

    var { nameProduct, priceProduct, checkbox, saved } = this.state;
    var Shownoti = saved === true ? Notification_added : "";
    return (
      <div className="container w-75">
        {Shownoti}
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name Product:</label>
            <input
              type="text"
              className="form-control"
              name="nameProduct"
              value={nameProduct}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group">
            <label>Price Product:</label>
            <input
              type="number"
              className="form-control"
              name="priceProduct"
              value={priceProduct}
              onChange={this.onChange}
            />
          </div>
          <div className="form-group mb-0">
            <label>Status:</label>
          </div>
          <div className="checkbox mb-3">
            <label>
              <input
                type="checkbox"
                name="checkbox"
                onChange={this.onChange}
                value={checkbox}
              />
              <span className="ml-2">available</span>
            </label>
          </div>
          <button className="btn btn-success mr-2">Save</button>
          <button className="btn btn-danger">
            <Link to="/product-list" className="text-white ml-1">
              Back
            </Link>
          </button>
        </form>
      </div>
    );
  }
}

export default ProductActionPage;

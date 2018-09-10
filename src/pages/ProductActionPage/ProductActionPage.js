import React, { Component } from "react";
import { Link } from "react-router-dom";
import randomstring from "randomstring";
import * as actions from "./../../actions/index";
import { connect } from "react-redux";

class ProductActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      nameProduct: "",
      priceProduct: "",
      checkbox: false,
      saved: false,
      updated: false
    };
  }

  onSubmit = e => {
    e.preventDefault();
    // var { history } = this.props;
    var { id, nameProduct, priceProduct, checkbox } = this.state;
    var product = {
      id:id,
      name: nameProduct,
      code: randomstring.generate(10),
      price: priceProduct,
      status: checkbox
    };

    if (id) {
      this.props.onUpdateProduct(product);
      // callApi(`products/${id}`, "PUT", {
      //   name: nameProduct,
      //   code: randomstring.generate(10),
      //   price: priceProduct,
      //   status: checkbox
      // }).then(res => {
      this.setState({
        updated: true
      }); //history.push("/product-list"); //use as redirect link
      // });
    } else {
      this.props.addNewProduct(product);
      this.setState({
        saved: true
      });
    }
  };

  onChange = e => {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  };

  componentDidMount() {
    var { match } = this.props;
    if (match) {
      var id = match.params.id;
      this.props.onEditProduct(id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps && nextProps.editProduct) {
      var { editProduct } = nextProps;
      this.setState({
        id: editProduct.id,
        nameProduct: editProduct.name,
        priceProduct: editProduct.price,
        checkbox: editProduct.status
      });
    }
  }

  render() {
    var Notification_added = (
      <h2 className="badge badge-pill badge-success">
        Your product has been added
      </h2>
    );

    var Notification_updated = (
      <h2 className="badge badge-pill badge-warning">
        Your product has been updated
      </h2>
    );

    var { nameProduct, priceProduct, checkbox, saved, updated } = this.state;
    var Shownoti = saved === true ? Notification_added : "";
    var showUpdate = updated === true ? Notification_updated : "";
    return (
      <div className="container w-75">
        {Shownoti}
        {showUpdate}
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
                checked={checkbox}
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

const mapStateToProps = (state, ownProps) => {
  return {
    editProduct: state.editProduct
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNewProduct: product => {
      dispatch(actions.addProductRequest(product));
    },
    onEditProduct: id => {
      dispatch(actions.getProductToUpdateRequest(id));
    },
    onUpdateProduct: product => {
      dispatch(actions.updateProductRequest(product));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductActionPage);

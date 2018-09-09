import React, { Component } from "react";
import ProductList from "./../../components/ProductList/ProductList";
import ProductItem from "./../../components/ProductItem/ProductItem";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import callApi from "./../../utils/apiCaller";
class ProductListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productlist: []
    };
  }

  componentDidMount() {
    callApi("products", "GET", null).then(res => {
      this.setState({
        productlist: res.data
      });
    });
  }

  onDelete = id => {
    var { productlist } = this.state;

    callApi(`products/${id}`, "DELETE", null).then(res => {
      if (res.request.status === 200) {
        var index = this.findIndex(productlist, id);
        if (index !== -1) {
          productlist.slice(index, 1);
          this.setState({
            productlist: productlist
          });
        }
      }
    });
  };

  findIndex = (products, id) => {
    var result = -1;
    products.forEach((arr, index) => {
      if (arr.id === id) {
        result = index;
      }
    });
    return result;
  };
  render() {
    var { productlist } = this.state;

    return (
      <div>
        <div className="mt-2">
          <button className="btn btn-warning text-white text-uppercase">
            <Link to="/product/add" className="text-white">
              Add new Product
            </Link>
          </button>
        </div>

        <div>
          <ProductList>{this.showProduct(productlist)}</ProductList>
        </div>
      </div>
    );
  }
  showProduct = products => {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (
          <ProductItem
            key={index}
            product={product}
            index={index}
            onDelete={this.onDelete}
          />
        );
      });
    }
    return result;
  };
}
const mapStateToProps = (state, ownProps) => {
  return {
    productlist: state.ProductsRD
  };
};

export default connect(
  mapStateToProps,
  null
)(ProductListPage);

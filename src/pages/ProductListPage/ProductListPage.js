import React, { Component } from "react";
import ProductList from "./../../components/ProductList/ProductList";
import ProductItem from "./../../components/ProductItem/ProductItem";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "./../../actions/index";
class ProductListPage extends Component {
  componentDidMount() {
    this.props.fetchAllData();
  }

  onDelete = id => {
    this.props.deleteProduct(id);
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
    var { productlist } = this.props;

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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchAllData: () => {
      dispatch(actions.fetchProductRequest());
    },
    deleteProduct: id => {
      dispatch(actions.deleteProductRequest(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListPage);

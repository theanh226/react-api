import React, { Component } from "react";
import ProductList from "./../../components/ProductList/ProductList";
import ProductItem from "./../../components/ProductItem/ProductItem";
import { connect } from "react-redux";
import axios from "axios";
import callApi from "./../../utils/apiCaller";
class ProductListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productlist: []
    };
  }

  componentDidMount() {
callApi('products','GET',null).then(res =>{
  this.setState({
    productlist : res.data
  })
})
  }

  render() {
    // var { productlist } = this.props;

    var { productlist } = this.state;

    return (
      <div>
        <div className="mt-2">
          <button className="btn btn-warning text-white text-uppercase">
            add new product
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
        return <ProductItem key={index} product={product} index={index} />;
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

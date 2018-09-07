import React, { Component } from "react";
import "./App.css";
import Menu from "./components/Menu/Menu";
import ProductList from "./components/ProductList/ProductList";

class App extends Component {
  render() {
    return (
      <div>
        <Menu />

        <div className="container">
          <div className="mt-2">
            <button className="btn btn-warning text-white text-uppercase">
              add new product
            </button>
          </div>
        </div>
        <ProductList />
      </div>
    );
  }
}

export default App;

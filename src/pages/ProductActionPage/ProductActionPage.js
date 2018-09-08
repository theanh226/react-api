import React, { Component } from "react";

class ProductActionPage extends Component {
  render() {
    return (
      <div className="container w-75">
        <form>
          <div className="form-group">
            <label>Name Product:</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Price Product:</label>
            <input type="number" className="form-control" />
          </div>
          <div className="form-group mb-0">
            <label>Status:</label>
          </div>
          <div className="checkbox mb-3">
            <lavel>
              <input type="checkbox" />
              <span className="ml-2">available</span>
            </lavel>
          </div>
          <button class="btn btn-success">Save</button>
        </form>
      </div>
    );
  }
}

export default ProductActionPage;

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
          <div className="form-group">
            <label>Status:</label>
          </div>
          <div className="checkbox">
            <lavel>
              <input type="checkbox" />
              available
            </lavel>
          </div>
          <button class="btn btn-success">Save</button>
        </form>
      </div>
    );
  }
}

export default ProductActionPage;

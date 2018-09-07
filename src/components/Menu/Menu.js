import React, { Component } from "react";

class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand text-success">React Api</a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link">
              Home <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link">Product list</a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Menu;

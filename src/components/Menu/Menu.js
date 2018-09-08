import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

const menus = [
  {
    label: "Homepage",
    to: "/",
    exact: true
  },
  {
    label: "Product Control",
    to: "/product-list",
    exact: false
  }
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "active" : "";
        return (
          <Link to={to} className={` mr-2 ${active} text-black`}>
            {label}
          </Link>
        );
      }}
    />
  );
};
class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand text-success">React Api</a>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">{this.showMenus(menus)}</div>
        </div>
      </nav>
    );
  }

  showMenus = menus => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            key={index}
            label={menu.label}
            to={menu.to}
            activeOnlyWhenExact={menu.exact}
          />
        );
      });
    }
    return result;
  };
}

export default Menu;

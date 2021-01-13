import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const list = [
  { name: "Start", path: "/", exact: true },
  { name: "Produkty", path: "/products" },
  { name: "Kontakt", path: "/contact" },
  { name: "Panel Admina", path: "/admin" },
];
const Navigation = () => {
  const main = list.map((item) => (
    <li className="list-group-item" key={item.name}>
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
    </li>
  ));
  return (
    <nav className="mainnav">
      <ul className="list-group">{main}</ul>
    </nav>
  );
};

export default Navigation;

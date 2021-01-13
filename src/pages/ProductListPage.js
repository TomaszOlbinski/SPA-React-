import React from "react";
import { Link } from "react-router-dom";
import '../styles/ProductListPage.css';

const products = ["car", "bike", "motorcycle"];

const ProductListPage = () => {
  const List = products.map((product) => (
    <li className="list-group-item" key={product}>
      <Link className="btn btn-success bt-lg" to={`/product/${product}`}>{product}</Link>
    </li>
  ));
  return (
    <div>
      <h5 style={{ fontSize: "2rem" }} > Lista Prodóktów</h5>
      <div>
        <ul>{List}</ul>
      </div>
    </div>
  );
};

export default ProductListPage;

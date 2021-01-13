import React from 'react';
import Product from '../components/Product';
import { Link } from 'react-router-dom';
import "../styles/Product.css";
import bike from "../images/bike.png";
import car from "../images/car.jpg";
import motorcycle from "../images/motorcycle.png";

const ProductPage = ({ match }) => {
    let picture = "";

    switch (match.params.id) {
        case "car":
            picture = car
            break;
        case "bike":
            picture = bike
            break;
        default:
            picture = motorcycle
            break;
    }
    return (
        <>
            <div className="product__title">Strona produktu</div>
            <img className="product__img" src={picture} alt={match.params.id} />
            <Product className="produck__name" id={match.params.id} />
            <Link className="product__link" to='/products'>Powrót do listy produktów</Link>
        </>
    );
}

export default ProductPage;
import React from 'react';
import { Route } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <>
            <h2 className="footer__title">Stopka</h2>
            <Route path="/" exact render={(props) => (
                <p className="footer__p">Jesteś na <span>stronie głownej</span></p>
            )} />
            <Route path="/:page" exact render={(props) => (
                <p className="footer__p">Jesteś na <span>{props.match.params.page}</span></p>
            )} />
            <Route path="/:page/:idproduct" exacy render={(props) => (
                <p className="footer__p">Jesteś na <span>{props.match.params.idproduct}</span></p>
            )} />
        </>
    );
}

export default Footer;
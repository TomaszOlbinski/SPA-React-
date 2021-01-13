import React from "react";
import "../styles/Login.css";

const LoginPage = () => {
  return (
    <div className="form-group form">
      <input className="form-control form__input" type="text" id="input" placeholder="Login" />
      <input className="form-control form__input" type="password" id="password" placeholder="Password" />
      <button className="btn btn-primary form__button">Zaloguj</button>
    </div>
  );
};

export default LoginPage;

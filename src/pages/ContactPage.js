import React, { Component } from "react";
import '../styles/contact.css';
import { Prompt } from 'react-router-dom';


class ContactPage extends Component {
  state = { value: "" };
  handletext = (e) => {
    this.setState({ value: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ value: "" });
  };
  render() {
    return (
      <div className="contact">
        <form className="contact__form" onSubmit={this.handleSubmit}>
          <h5 className="contact__title">Napisz do nas</h5>
          <textarea
            value={this.state.value}
            onChange={this.handletext}
            placeholder="Wpisz wiadomość"
            className="form-control contact__text"
          ></textarea>
          <button className="btn btn-primary contact__btn" >Wyślij</button>
        </form>
        <Prompt when={this.state.value === '' ? false : true} message='Masz wypełniony i niewysłany formularz. Czy na pewno chcesz opuścić tę stronę?' />
      </div>
    );
  }
}

export default ContactPage;

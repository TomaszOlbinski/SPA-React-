import React, { Component } from "react";
import '../styles/App.css';
import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';
import Footer from './Footer';
import {
  BrowserRouter as Router
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  state = {};

  render() {
    return (
      <Router>
        <div className="app">
          <div className="header">
            {<Header />}
          </div>
          <div className="main">
            <div className="main__aside">
              {<Navigation />}
            </div>
            <div className="main__page">
              {<Page />}
            </div>
          </div>
          <footer>{<Footer />}</footer>
        </div>
      </Router>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../stylesheets/header.css';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-light">
        <Link className="navbar-brand" to="/">
          <span className="header-logo">White Man Cooks</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/recipes" className="nav-link ">
                <span className="header-text-color">Recipes</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Ingredients" className="nav-link">
                <span className="header-text-color">Ingredients</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <span className="header-text-color">About</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;

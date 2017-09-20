import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, HeaderLogo, LastHeaderItem, HeaderItem } from '../stylesheets/headerStyled';
//using bootstrap

export default () => {
  return (
    <Nav className="navbar navbar-expand-md navbar-light">
      <Link className="navbar-brand" to="/">
        <HeaderLogo>American Cooks Chinese</HeaderLogo>
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
              <HeaderItem>Recipes</HeaderItem>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ingredients" className="nav-link">
              <HeaderItem>Ingredients</HeaderItem>
            </Link>
          </li>
          <LastHeaderItem className="nav-item padding-right">
            <Link to="/about" className="nav-link">
              <HeaderItem>About</HeaderItem>
            </Link>
          </LastHeaderItem>
        </ul>
      </div>
    </Nav>
  );
};

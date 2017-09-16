import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header from './Header';

// import '../stylesheets/about.css';

class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <h1>About Me:</h1>
        <p> My name is Alex and I like to cook</p>
      </div>
    );
  }
}

export default About;

import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
// styled-components keeped in a seperate file
import { LandingContainer, ChineseHeader, EnglishHeader } from '../stylesheets/landingStyled';
//for hover effect
import '../stylesheets/landing.css';

class Landing extends Component {
  componentDidMount() {
    this.sendToRecipes();
  }

  sendToRecipes() {
    setTimeout(() => {
      this.props.history.push('/recipes');
    }, 5000);
  }

  render() {
    return (
      <div>
        <LandingContainer>
          <Link to="/recipes" className="landing-link">
            <div className="landing-header-container">
              <ChineseHeader id="landing_chinese">老外烹饪</ChineseHeader>
              <EnglishHeader id="landing_english">American Cooks Chinese</EnglishHeader>
            </div>
          </Link>
        </LandingContainer>
      </div>
    );
  }
}

export default withRouter(Landing);

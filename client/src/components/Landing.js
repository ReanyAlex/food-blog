import React from 'react';
import { Link } from 'react-router-dom';
// styled-components keeped in a seperate file
import { LandingContainer, ChineseHeader, EnglishHeader } from '../stylesheets/landingStyled';
//for hover effect
import '../stylesheets/landing.css';

export default () => (
  <LandingContainer>
    <Link to="/recipes" className="landing-link">
      <div className="landing-header-container">
        <ChineseHeader id="landing_chinese">老外烹饪</ChineseHeader>
        <EnglishHeader id="landing_english">White Man Cooks</EnglishHeader>
      </div>
    </Link>
  </LandingContainer>
);

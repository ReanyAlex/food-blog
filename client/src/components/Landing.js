import React from 'react';
import { Link } from 'react-router-dom';

import '../stylesheets/landing.css';

export default () => (
  <div className="landing">
    <div id="landing_div">
      <Link to="/recipes" className="landing-link">
        <div className="landing-header-container">
          <h1 id="landing_chinese">老外烹饪</h1>
          <h2 id="landing_english">White Man Cooks</h2>
        </div>
      </Link>
    </div>
  </div>
);

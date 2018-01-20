import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
// styled-components keeped in a seperate file
import { LandingContainer, ChineseHeader, EnglishHeader } from '../stylesheets/landingStyled';
//for hover effect
import '../stylesheets/landing.css';

class Landing extends Component {
  state = {
    show: true,
    push: null,
    fade: null
  };

  componentDidMount() {
    this.fadeOut();
  }

  sendToRecipes() {
    const pushTimeout = setTimeout(() => {
      this.props.history.push('/recipes');
    }, 6000);

    this.setState({ push: pushTimeout });
  }

  fadeOut() {
    const fadeTimeout = setTimeout(() => {
      this.setState({ show: false });
    }, 5000);

    this.sendToRecipes();
    this.setState({ fade: fadeTimeout });
  }

  stopTimeOut() {
    window.clearTimeout(this.state.push);
    window.clearTimeout(this.state.fade);
  }

  render() {
    return (
      <div>
        <ReactCSSTransitionGroup
          component="div"
          transitionName="fade"
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionEnter={false}
          transitionLeave={true}
          transitionLeaveTimeout={1000}
        >
          {this.state.show ? (
            <LandingContainer>
              <Link to="/recipes" className="landing-link">
                <div className="landing-header-container" onClick={() => this.stopTimeOut()}>
                  <ChineseHeader id="landing_chinese">老外烹饪</ChineseHeader>
                  <EnglishHeader id="landing_english">American Cooks Chinese</EnglishHeader>
                </div>
              </Link>
            </LandingContainer>
          ) : (
            ''
          )}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default withRouter(Landing);

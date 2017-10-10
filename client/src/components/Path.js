import React, { Component } from 'react';
import Header from './Header';

import { Container } from '../stylesheets/pathStyled';

export default function(ComposedComponent) {
  class Path extends Component {
    render() {
      return (
        <div>
          <Header />
          <Container>
            <ComposedComponent {...this.props} />
          </Container>
        </div>
      );
    }
  }

  return Path;
}

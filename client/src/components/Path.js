import React from 'react';
import Header from './Header';
import ItemList from './ItemList';
import About from './About';

// styled-components keeped in a seperate file
import { Container } from '../stylesheets/pathStyled';

export default props => {
  return (
    <div>
      <Header />
      <Container>
        {props.match.params.path === 'about' ? <About /> : <ItemList match={props.match.params.path} />}
      </Container>
    </div>
  );
};

import React from 'react';
import Header from './Header';
import ItemList from './ItemList';
import About from './About';

export default props => {
  return (
    <div>
      <Header />
      <div className="container">
        {props.match.params.path === 'about' ? <About /> : <ItemList match={props.match.params.path} />}
      </div>
    </div>
  );
};

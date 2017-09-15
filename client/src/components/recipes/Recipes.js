import React from 'react';
import Header from '../Header';
import RecipeList from './RecipeList';

const Recipes = props => {
  return (
    <div>
      <Header searchParam={props.searchParam} />
      <div className="container">
        <RecipeList search={props.search} />
      </div>
    </div>
  );
};

export default Recipes;

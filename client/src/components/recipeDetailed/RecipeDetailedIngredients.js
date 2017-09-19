import React from 'react';

import { Header, UnorderedList } from '../../stylesheets/recipeDetailed/recipeDetailedIngredientsStyled';

export default ({ ingredients }) => {
  return (
    <div>
      <Header
      // className="recipeDetailed-instructions-header"
      >
        Ingredients
      </Header>
      <UnorderedList
      // className="recipeDetailed-ingredients"
      >
        {ingredients.map(ingredient => {
          return (
            <li key={ingredient._id}>
              <span>{ingredient.amount} </span>
              <span>{ingredient.measurement} </span>
              <span>{ingredient.item}</span>
            </li>
          );
        })}
      </UnorderedList>
    </div>
  );
};

import React from 'react';

import { Header, UnorderedList } from '../../stylesheets/recipeDetailed/recipeDetailedIngredientsStyled';

export default ({ ingredients }) => {
  return (
    <div>
      <Header>Ingredients</Header>
      <UnorderedList>
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

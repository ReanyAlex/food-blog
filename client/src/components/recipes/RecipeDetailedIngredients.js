import React from 'react';

export default ({ ingredients }) => {
  return (
    <div>
      <h4 className="recipeDetailed-instructions-header">Ingredients</h4>
      <ul className="recipeDetailed-ingredients">
        {ingredients.map(ingredient => {
          return (
            <li key={ingredient._id}>
              <span>{ingredient.amount} </span>
              <span>{ingredient.measurement} </span>
              <span>{ingredient.item}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

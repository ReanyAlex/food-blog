import React from 'react';
import { Link } from 'react-router-dom';

export default ({ displayIndex, recipes }) => {
  let startingIndex = (displayIndex - 1) * 15;
  let endingIndex = displayIndex * 15;

  let recipesToBeDisplayed = recipes.slice(startingIndex, endingIndex);

  return (
    <div>
      {recipesToBeDisplayed.map(recipe => {
        return (
          <div
            key={recipe._id}
            className="recipeBox col-sm-12 col-m-6 col-lg-4"
          >
            <Link to={`/${recipe.title}/${recipe._id}`} className="recipe-link">
              <div className="recipe-img-container">
                <img
                  className="recipe-img"
                  src={process.env.PUBLIC_URL + `/images/${recipe.image}.jpg`}
                  alt={recipe.title}
                />
              </div>
              <h4 className="recipe-title">{recipe.title}</h4>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

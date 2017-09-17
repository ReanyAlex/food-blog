import React from 'react';

export default ({ ingredients }) => {
  return (
    <div>
      {ingredients.map(ingredient => {
        return (
          <div key={ingredient._id} className="ingredient-box">
            <img
              src={process.env.PUBLIC_URL + `/images/${ingredient.image}.jpg`}
              className="ingredient-img col-sm-4 col-m-3"
              alt={ingredient.name}
            />
            <div className="ingredient-description col-sm-8 col-m-9">
              <h3 className="ingredient-name">{ingredient.name}</h3>
              <p>{ingredient.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

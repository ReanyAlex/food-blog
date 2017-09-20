import React from 'react';
import { Link } from 'react-router-dom';

// styled-components keeped in a seperate file
import { Box, ImageWrapper, Image, Title } from '../stylesheets/recipeBoxStyled';
//needs some css currently
import '../stylesheets/recipeBox.css';

export default ({ displayIndex, recipes }) => {
  let startingIndex = (displayIndex - 1) * 15;
  let endingIndex = displayIndex * 15;

  let recipesToBeDisplayed = recipes.slice(startingIndex, endingIndex);

  return (
    <div>
      {recipesToBeDisplayed.map(recipe => {
        let imagePath = `/images/${recipe.title.toLowerCase().replace(/ /g, '-')}`;
        return (
          <Box key={recipe._id}>
            <Link to={`/${recipe.title}/${recipe._id}`} className="recipe-link">
              <ImageWrapper>
                <Image src={`${imagePath}/${recipe.image}.jpg`} alt={recipe.title} />
              </ImageWrapper>
              <Title>{recipe.title}</Title>
            </Link>
          </Box>
        );
      })}
    </div>
  );
};
